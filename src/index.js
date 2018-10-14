import 'bootstrap/dist/css/bootstrap.min.css';
import { concat, ifElse, isEmpty, pathOr, pipe, trim } from 'ramda';
import Results from './Results';
import getInputValue from './getInputValue';
import getWikipediaSearchUrlFor from './getWikipediaSearchUrlFor';

const render = markup => {
  const resultsElement = document.getElementById('results');

  resultsElement.innerHTML = markup;
};

const makeSearchRequestIfValid = pipe(
  getInputValue,
  ifElse(
    isEmpty,
    () => {},
    pipe(
      getWikipediaSearchUrlFor,
      url =>
        fetch(url)
          .then(res => res.json())
          .then(Results)
          .then(render)
    )
  )
);

const inputElement = document.querySelector('input');

inputElement.addEventListener('keyup', makeSearchRequestIfValid);
