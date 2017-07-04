import * as React from 'react';
import { css } from 'glamor';

export interface IFooProps { }

/**
 * Sample component.
 */
export class Foo extends React.Component<IFooProps, void> {
  public render() {
    return (
      <div {...styles.base}>Foo</div>
    );
  }
}


const styles = {
  base: css({
    backgroundColor: 'rgba(255, 0, 0, 0.1)', /* RED */
    padding: 8,
    minHeight: 120,
    borderRadius: 4,
  }),
};

