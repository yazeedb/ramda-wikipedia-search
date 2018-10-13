import { pipe } from 'ramda';
import searchWikipediaFor from './searchWikipediaFor';
import render from './render';
import sanitizeInput from './sanitizeInput';

export default pipe(
  sanitizeInput,
  value =>
    searchWikipediaFor(value)
      .then(res => res.json())
      .then(render)
);
