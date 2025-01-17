import * as _ from 'lodash';
import _deepMapValues from 'src/lodashFunctions/deepMapValues';
import defaultOptions from 'src/defaultOptions';
import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions';

/**
 * Получить опции конвертирования.
 * @param {object} options - Опции, выбранные пользователем.
 * @return {ConvertOptions} Опции конвертирования.
 */
const getOptions = (options: ConvertOptions = {}): ConvertOptions => {
  const resultOptions: ConvertOptions = _deepMapValues(defaultOptions, (path: string[], key: string, value: string) => {
    // Если есть обновления для этой опции
    if (_.has(options, [...path, key])) {
      const newValue = _.get(options, [...path, key]);
      return newValue;
    } else {
      return value;
    }
  });
  return resultOptions;
};

export default getOptions;
