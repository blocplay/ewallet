import React from 'react';
import { storiesOf } from '@storybook/react';
import PLAYCircleButton from '../../src/components/PLAYCircleButton';

const container = {
  width: '300px',
  paddingLeft: '2rem',
};

const smallContainer = story => (
  <div style={container}>
    {story()}
  </div>
);

storiesOf('PLAYCircleButton', module)
  .addDecorator(smallContainer)
  .add('normal state', () => (
    <PLAYCircleButton />
  ));
