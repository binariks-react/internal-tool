/**
 * Searching a DOM node in the wrapper by data-test
 * @param {Object} wrapper - componenet where we want to find a data-test
 * @param {String} testId - value of data-test atrribute
 */
export const getByTestId = (wrapper, testId) => wrapper.find(`[data-test='${testId}']`);
