/* tslint:disable:object-literal-key-quotes max-line-length  */
import { css } from 'glamor';

const base = css({
  '& .list-unstyled': {
    listStyle: 'none',
    paddingLeft: 0,
    '>li': {
      position: 'relative',
      display: 'block',
      '>a': {
        position: 'relative',
        display: 'block',
        padding: '10px 15px',
        color: 'grey',
        textDecoration: 'none',
        boxSizing: 'border-box',
        '& .icon': {
          display: 'inline-block',
          marginRight: '10px',
          verticalAlign: 'middle',
        },
        '&:hover': {
          backgroundColor: '#eee',
          color: '#333',
          '& svg .icon-content': {
            fill: '#333 !important',
          },
        },
        '&.active': {
          backgroundColor: '#eee',
          border: '1px solid #ddd',
        },
      },
    },
  },
});

export const navigationStyles = {
  ...base,
};
