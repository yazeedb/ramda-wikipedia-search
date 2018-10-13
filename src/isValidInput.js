import { pipe } from 'ramda';
import sanitizeInput from './sanitizeInput';
import isNotEmpty from './isNotEmpty';

export default pipe(
  sanitizeInput,
  isNotEmpty
);
