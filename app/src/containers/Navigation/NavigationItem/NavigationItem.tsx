import * as React from 'react';
import { navigationItemStyles } from './NavigationItem.styles';

export interface INavigationItemProps {
  styles?: any;
  translations: Translation.ILinkTranslations;
  index: number;
  key: string;
  // active: boolean;
  page: string;
  // onClick(id: number): void;
}

const getIsActive = (page: string) => page === location.hash;

/**
 * Navigation Item component.
 */
export class NavigationItem extends React.Component<INavigationItemProps, void> {
  constructor(props: INavigationItemProps) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // private handleClick() {
  //     this.props.onClick(this.props.index);
  // }

  public static defaultProps: Partial<INavigationItemProps> = {
      styles: navigationItemStyles,
  };

  public render() {
    const link = `#/${this.props.page}`;
    const isActive = getIsActive(link);
    return (
      <li {...this.props.styles}>
        <a
          title={this.props.translations.titleAttr}
          alt={this.props.translations.altAttr}
          className={isActive ? 'active' : ''}
          href={link}>
            <span className='icon'>{this.props.children}</span>
            {this.props.translations.text}
        </a>
      </li>
    );
  }
}
