import 'bootstrap/dist/css/bootstrap.min.css';
import { ifElse, isEmpty, pipe } from 'ramda';
import Results from './Results';
import getInputValue from './getInputValue';
import getWikipediaSearchUrlFor from './getWikipediaSearchUrlFor';

const doNothing = () => {};

const render = markup => {
  const resultsElement = document.getElementById('results');

  resultsElement.innerHTML = markup;
};

const searchAndRenderResults = pipe(
  getWikipediaSearchUrlFor,
  url =>
    fetch(url)
      .then(res => res.json())
      .then(Results)
      .then(render)
);

const makeSearchRequestIfValid = pipe(
  getInputValue,
  ifElse(isEmpty, doNothing, searchAndRenderResults)
);

const inputElement = document.querySelector('input');

inputElement.addEventListener('keyup', makeSearchRequestIfValid);
