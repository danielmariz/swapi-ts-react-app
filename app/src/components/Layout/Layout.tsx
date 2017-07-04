import * as React from 'react';
import { Header } from '../Header';
import { Navigation } from '../../containers/Navigation';
import { layoutStyles } from './Layout.styles';

export interface ILayoutProps {
  styles?: any;
}

/**
 * Layout page container.
 */
export class Layout extends React.Component<ILayoutProps, void> {
  constructor(props: ILayoutProps) {
    super(props);
  }

  public static defaultProps: Partial<ILayoutProps> = {
    styles: layoutStyles,
  };

  public render() {
    return (
      <div {...this.props.styles}>
        <Header />
        <div className='container'>
          <aside className='sidebar'>
            <Navigation />
          </aside>
          <main className='content'>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}
