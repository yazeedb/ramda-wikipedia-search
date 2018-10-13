import { pathOr, pipe, trim } from 'ramda';

export default pipe(
  pathOr('', ['target', 'value']),
  trim
);
