import * as React from 'react';
import { headerTranslations } from '../../lang/en';
import { headerStyles } from './Header.styles';

export interface IHeaderProps {
  styles?: any;
  translations?: Translation.ILinkTranslations;
}

/**
 * Header component.
 */
export const Header: React.SFC<IHeaderProps> = (props) => (
  <header {...props.styles}>
    <a href='/' className='logo'
        title={props.translations.titleAttr}
        alt={props.translations.altAttr}>
          {props.translations.text}
    </a>
  </header>
);

Header.defaultProps = {
  styles: headerStyles,
  translations: headerTranslations,
};
