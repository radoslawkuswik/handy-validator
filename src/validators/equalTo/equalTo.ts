import errors from './equalTo.errors';

/**
 * equalTo validator
 * @version 1.0.0
 */
export default (value: any, arrayOfElements: any[] = []): boolean => {
  try {
    if (!Array.isArray(arrayOfElements)) {
      throw new Error(errors.arrayOfElementsNotAnArray);
    }

    return arrayOfElements.includes(value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return false;
  }
};