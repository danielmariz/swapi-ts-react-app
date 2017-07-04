import * as React from 'react';
import { planetsStyles } from './Planets.styles';

export interface IPlanetsProps {
  styles?: any;
}

/**
 * Planets page container.
 */
export class Planets extends React.Component<IPlanetsProps, void> {
  constructor(props: IPlanetsProps) {
    super(props);
  }

  public static defaultProps: Partial<IPlanetsProps> = {
      styles: planetsStyles,
  };

  public render() {
    return (
      <div>
        <h1>Planets</h1>
      </div>
    );
  }
}
