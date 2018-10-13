import { when } from 'ramda';
import isValidInput from './isValidInput';
import makeSearchRequestFromInput from './makeSearchRequestFromInput';

const searchIfValidInput = when(isValidInput, makeSearchRequestFromInput);

const init = () => {
  const inputElement = document.querySelector('input');

  inputElement.addEventListener('keyup', searchIfValidInput);
};

init();
