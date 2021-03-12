import { HttpException } from '@nestjs/common';
import { ContentObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

import { Options } from '../interfaces/options.interface';
import { merge } from './example.util';

const PlaceholderExceptionMapping = {
  $status: 'getStatus',
  $description: 'message',
};

const resolvePlaceholders = (template: any, exception: HttpException) => {
  for (const key of Object.keys(template)) {
    const placeholderProperty = PlaceholderExceptionMapping[template[key]];
    if (placeholderProperty) {
      if (typeof exception[placeholderProperty] === 'function') {
        template[key] = exception[placeholderProperty]();
      } else {
        template[key] = exception[placeholderProperty];
      }
    }
  }
};

const buildExampleResponse = (template: any, exception: HttpException) => {
  if (template && typeof template === 'object') {
    const copy = JSON.parse(JSON.stringify(template));
    resolvePlaceholders(copy, exception);
    return copy;
  }

  return null;
};

export const buildExampleContent = (exceptions: HttpException[], options: Options) => {
  const content = { [options.contentType]: { examples: {} } };

  for (const exception of exceptions) {
    const exampleResponse = buildExampleResponse(options.template, exception);

    merge(content[options.contentType].examples, {
      [exception.constructor.name]: {
        description: options.description || exception.message,
        value: exampleResponse,
      },
    });
  }

  return content;
};

export const mergeExampleContent = (content: ContentObject, newContent: ContentObject) => {
  for (const key of Object.keys(newContent)) {
    const { examples } = content[key];
    const { examples: newExamples } = newContent[key];

    merge(examples, newExamples);
  }
};