import * as React from 'react';
import { listItemStyles } from './ListItem.styles';

export type ITranslationsTypes =  Translation.IPlanetTranslations |
                                  Translation.IPeopleTranslations |
                                  Translation.IVehicleTranslations;

export interface IColumn {
  infos: string[];
}

export interface IListItemProps {
  styles?: any;
  data: Models.IPerson | Models.IPlanet | Models.IVehicle;
  translations: ITranslationsTypes;
  columns: IColumn[];
}


const itemContent = (key: string, index: number, props: IListItemProps) => (
  <li key={`item_${index}`} title={props.data[key]}>
    {props.translations[key]} {props.data[key]}
  </li>
);

const columnContent = (column: IColumn, index: number, props: IListItemProps ) => {
  const list = column.infos.map((key: string, index: number) => itemContent(key, index, props));
  return (
    <div className='distributed-flex-content-column' key={`column_${index}`}>
      <ul className='list-unstyled'>
        {list}
      </ul>
    </div>
  );
};

/**
 * ListItem component.
 */
export const ListItem: React.SFC<IListItemProps> = (props) => {
  const columns = props.columns.map((column: IColumn, index: number) => columnContent(column, index, props));
  return (
    <div {...props.styles}>
      <h2>{props.data.name}</h2>
      <div className='distributed-flex-content'>
        {columns}
      </div>
    </div>
  );
};


ListItem.defaultProps = {
  styles: listItemStyles,
};
