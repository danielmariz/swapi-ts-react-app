/* tslint:disable:no-console */
import * as React from 'react';
import { navigationTranslations } from '../../lang/en';
import { navigationStyles } from './Navigation.styles';
import { NavigationItem } from './NavigationItem';
import { SvgIcon } from '../../components/Icons/SvgIcon';

export interface INavigationProps {
  styles?: any;
  translations?: Translation.INavigationTranslations;
}

// TODO: integrate with the SWAPI api => http://swapi.co/api/
// FIXME: move to a config file
const pages: {} = {
  people: 'http://swapi.co/api/people/',
  planets: 'http://swapi.co/api/planets/',
  vehicles: 'http://swapi.co/api/vehicles/',
};

const log = (id: number) => console.log(`Item ${id} Clicked!`);

const childrenList: any = (props: INavigationProps) => (
  Object.keys(pages)
    .map((page, index) => (
      <NavigationItem
        index={index}
        key={`menu_item_${index}`}
        translations={props.translations[page]}
        page={page}>
        {<SvgIcon iconType={page as Icon.SvgIconTypes} />}
      </NavigationItem>
    ),
  )
);

/**
 * Navigation component.
 */
export const Navigation: React.SFC<INavigationProps> = (props) => (
  <nav {...props.styles}>
    <ul className='list-unstyled'>
     {childrenList(props)}
    </ul>
  </nav>
);

Navigation.defaultProps = {
  styles: navigationStyles,
  translations: navigationTranslations,
};
