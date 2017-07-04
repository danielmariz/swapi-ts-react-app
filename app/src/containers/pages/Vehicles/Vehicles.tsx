import * as React from 'react';
import { vehiclesStyles } from './Vehicles.styles';

export interface IVehiclesProps {
  styles?: any;
}

/**
 * Vehicles page container.
 */
export class Vehicles extends React.Component<IVehiclesProps, void> {
  constructor(props: IVehiclesProps) {
    super(props);
  }

  public static defaultProps: Partial<IVehiclesProps> = {
      styles: vehiclesStyles,
  };

  public render() {
    return (
      <div>
        <h1>Vehicles</h1>
      </div>
    );
  }
}
