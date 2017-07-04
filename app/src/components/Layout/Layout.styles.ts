/* tslint:disable:object-literal-key-quotes max-line-length  */
import { css } from 'glamor';

const base = css({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  width: '100%',
  '& .sidebar': {
    position: 'fixed',
    top: '120px',
    bottom: 0,
    left: 0,
    display: 'block',
    zIndex: 1000,
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: '#f5f5f5',
    width: '25%',
    float: 'left',
  },
  '& .content': {
    position: 'relative',
    width: '75%',
    float: 'left',
    marginTop: '120px',
    marginLeft: '25%',
    paddingTop: '30px',
  },
  '& h1, h2, h3, bold, strong, .font-bold': {
    fontWeight: 900,
  },
  '& .hidden': {
    display: 'none',
  },
  '& .only-screen-readers': {
    display: 'block !important',
    position: 'absolute !important',
    clip: 'rect(1px, 1px, 1px, 1px)',
  },
});

const mediaQueries = css({
  '@media (min-width: 1200px)': {
    '& .container': {
      position: 'fixed',
      width: '970px',
      left: '50%',
      top: 0,
      transform: 'translate(-50%, 0%)',
      height: '100%',
    },
    '& .content': {
      height: '100%',
      overflowY: 'auto',
    },
  },
});

export const layoutStyles = {
  ...base,
  ...mediaQueries,
};
