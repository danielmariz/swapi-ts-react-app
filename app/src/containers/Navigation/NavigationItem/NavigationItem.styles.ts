/* tslint:disable:object-literal-key-quotes max-line-length  */
import { css } from 'glamor';

const base = css({
  'a': {
    '& .icon': {
      marginRight: '20px',
      verticalAlign: 'middle',
    },
    '&:hover': {
      backgroundColor: '#eee',
      color: '#333',
    },
  },
});

export const navigationItemStyles = {
  ...base,
};
