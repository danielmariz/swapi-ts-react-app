/* tslint:disable:max-line-length */
import * as React from 'react';
import { describe } from '../../../common/storybook';
import { SvgIcon } from './SvgIcon';

const SvgPeopleIconProps: Icon.ISvgIcon = {
  title: 'Svg People Icon',
  color: 'red',
  width: 200,
  height: 200,
  iconType: 'people',
};

const SvgPlanetsIconProps: Icon.ISvgIcon = {
  title: 'Svg Planets Icon',
  color: 'blue',
  width: 200,
  height: 200,
  iconType: 'planets',
};

const SvgVehiclesIconProps: Icon.ISvgIcon = {
  title: 'Svg Vehicles Icon',
  color: 'green',
  width: 200,
  height: 160,
  iconType: 'vehicles',
};

const SvgCustomIconProps: Icon.ISvgIcon = {
  title: 'Svg Custom Icon',
  color: 'black',
  width: 200,
  height: 200,
};

describe('Icons', {
  title: 'SvgIcon component',
  width: '100%',
})
  .add('Svg People Icon', () => {
    return (
      <SvgIcon {...SvgPeopleIconProps} />
    );
  })
  .add('Svg Planets Icon', () => {
    return (
      <SvgIcon {...SvgPlanetsIconProps} />
    );
  })
  .add('Svg Vehicles Icon', () => {
    return (
      <SvgIcon {...SvgVehiclesIconProps} />
    );
  })
  .add('Svg Custom Icon', () => {
    return (
      <SvgIcon {...SvgCustomIconProps}>
        <path d='M16.7 8.4V5.96C16.7 3.02 14.3.6 11.35.6H8.66C5.7.6 3.3 3.02 3.3 5.97V8.4L.6 15.36c0 1.34 4.2 4.03 9.4 4.03s9.4-2.7 9.4-4.03L16.7 8.4zM5.98 17.2c-.28 0-.5-.23-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5M5.3 10c0-.37.2-.9.4-1.2 0 0 .65-.8 1.95-.8.66 0 1.12.3 1.12.3.3.2.56.66.56 1.03v1c0 .2-.3.34-.67.34h-2.7c-.36 0-.66-.3-.66-.67M8 16.7h-.7v-1.33l.7-.67v2zm1.66 0h-1v-2.67h1v2.68zM9 13.37v-1c0-.57.44-1.02 1-1.02s1 .45 1 1v1.02H9zm2.34 3.35h-1v-2.67h1v2.68zm1.35 0H12v-2l.7.67v1.34zm1.33.52c-.28 0-.5-.23-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m0-6.55h-2.7c-.36 0-.66-.15-.66-.33v-1c0-.38.25-.85.56-1.05 0 0 .46-.3 1.12-.3 1.3 0 1.94.8 1.94.8.2.3.4.83.4 1.2s-.3.67-.67.67m4.15 5c-.04.03-.08.04-.12.04-.14 0-.26-.07-.32-.2L15.3 9.2c-.64-1.6-1.44-2.24-2.84-2.24-.93 0-1.7.58-1.72.58-.42.3-1.06.3-1.48 0 0 0-.8-.58-1.72-.58-1.4 0-2.2.63-2.84 2.24L2.26 15.5c-.07.17-.27.25-.44.18-.17-.06-.26-.26-.2-.43l2.45-6.27C4.82 7.1 5.87 6.3 7.54 6.3c1.16 0 2.1.7 2.12.72.18.14.5.14.68 0 .03-.03.97-.7 2.12-.7 1.68 0 2.72.8 3.47 2.66l2.44 6.27c.07.17-.02.37-.2.43' />
      </SvgIcon>
    );
  });
