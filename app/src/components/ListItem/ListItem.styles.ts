/* tslint:disable:object-literal-key-quotes max-line-length  */
import { css } from 'glamor';

const base = css({
  margin: '20px',
  paddingLeft: '40px',
  borderBottom: '1px solid #ddd',
  '& .distributed-flex-content': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .distributed-flex-content-column': {
      flex: '1 0 0',
      paddingRight: '10px',
      minWidth: 0,
    },
  },
  '& .list-unstyled': {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
    '>li': {
      position: 'relative',
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});

export const listItemStyles = {
  ...base,
};
