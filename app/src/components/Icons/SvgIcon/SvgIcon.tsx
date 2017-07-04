/* tslint:disable:max-line-length */
import * as React from 'react';

const childrenOptions: Map<Icon.SvgIconTypes, React.ReactElement<HTMLElement>> = new Map<Icon.SvgIconTypes, React.ReactElement<HTMLElement>>();
childrenOptions.set('people', <path d='M7 9.75c-.7 0-1.25.56-1.25 1.25 0 .7.56 1.25 1.25 1.25.7 0 1.25-.56 1.25-1.25 0-.7-.56-1.25-1.25-1.25zm6 0c-.7 0-1.25.56-1.25 1.25 0 .7.56 1.25 1.25 1.25.7 0 1.25-.56 1.25-1.25 0-.7-.56-1.25-1.25-1.25zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.4 0-8-3.6-8-8 0-.3.02-.58.05-.86C4.4 8.1 6.28 6.16 7.25 3.77 9.08 6.33 12.06 8 15.43 8c.78 0 1.53-.1 2.25-.26.2.7.33 1.47.33 2.26 0 4.4-3.6 8-8 8z'/>);
childrenOptions.set('planets', <path d='M10 0C4.46 0 0 4.48 0 10s4.47 10 10 10c5.52 0 10-4.48 10-10S15.52 0 10 0zm6.92 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.83.63 3.36 1.9 4.32 3.56zM10 2.04c.83 1.2 1.48 2.53 1.9 3.96H8.1C8.5 4.57 9.16 3.24 10 2.04zM2.26 12C2.1 11.36 2 10.7 2 10s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H2.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.83-.63-3.36-1.9-4.32-3.56zm2.95-8H3.08c.96-1.66 2.5-2.93 4.33-3.56-.6 1.1-1.05 2.3-1.37 3.56zM10 17.96c-.83-1.2-1.48-2.53-1.9-3.96h3.8c-.42 1.43-1.07 2.76-1.9 3.96zM12.34 12H7.66c-.1-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.1.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.1 1.05-2.3 1.37-3.56h2.95c-.96 1.65-2.5 2.93-4.33 3.56zM14.35 12c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.3.26 2s-.1 1.36-.26 2h-3.38z'/>);
childrenOptions.set('vehicles', <path d='M19 4h-3V0H2C.9 0 0 .9 0 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2V8l-3-4zM5 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9L20.46 8H16V5.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/>);

/**
 * SvgIcon component.
 */
export const SvgIcon: React.SFC<Icon.ISvgIcon> = (props) => {
  const IconContent = props.children || childrenOptions.get(props.iconType);
  return (
    <svg xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      aria-labelledby='SvgIconTitle'
      width={props.width}
      height={props.height}
      viewBox={`0 0 20 20`}>
      <title id='SvgIconTitle'>{props.title}</title>
      <g className='icon-content' fill={props.color}>
        {IconContent}
      </g>
    </svg>
  );
};

SvgIcon.defaultProps = {
  title: 'People Icon',
  color: 'grey',
  width: 20,
  height: 20,
  iconType: 'people',
};
