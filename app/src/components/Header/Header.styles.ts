/* tslint:disable:object-literal-key-quotes max-line-length  */
import { css } from 'glamor';

const base = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  right: 0,
  left: 0,
  zIndex: 1030,
  minHeight: 120,
  '& .logo': {
    display: 'inline-block',
    width: 203,
    height: 95,
    background: 'url(logo-star-wars.png) no-repeat top left 100%',
    textIndent: -9999,
  },
});

const retina = css({
  '@media only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)': {
    '& .logo': {
      background: 'url(logo-star-wars@2x.png) no-repeat top left / 203px 95px',
    },
  },
});

export const headerStyles = {
  ...base,
  ...retina,
};
