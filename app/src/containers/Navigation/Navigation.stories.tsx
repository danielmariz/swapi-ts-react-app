import * as React from 'react';
import { describe } from '../../common/storybook';
import { Navigation } from './Navigation';

describe('primitives', {
  title: 'Navigation component',
  width: 250,
})
  .add('Navigation', () => {
    return (
      <Navigation />
    );
  });
