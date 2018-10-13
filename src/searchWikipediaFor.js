import { concat, pipe } from 'ramda';

export default pipe(
  concat(
    'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='
  ),
  fetch
);
