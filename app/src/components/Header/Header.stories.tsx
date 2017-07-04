import * as React from 'react';
import { describe } from '../../common/storybook';
import { Header } from './Header';


describe('primitives', {
  title: 'Header component',
  width: '100%',
})
  .add('Header', () => {
    return (
      <Header />
    );
  });
