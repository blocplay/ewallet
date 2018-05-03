import React from 'react';
import { storiesOf } from '@storybook/react';
import PLAYFieldGroup from '../../src/components/PLAYFieldGroup';

const container = {
  width: '300px',
  paddingLeft: '2rem',
};

const smallContainer = story => (
  <div style={container}>
    {story()}
  </div>
);

storiesOf('PLAYFieldGroup', module)
  .addDecorator(smallContainer)
  .add('with error', () => (
    <PLAYFieldGroup
      help="Email is invalid"
      id="email"
      label="Email"
      onChange={() => {}}
      type="text"
      validationState="error"
      value="john.doe"
    />
  ))
  .add('with warning', () => (
    <PLAYFieldGroup help="" id="email" label="Email" type="text" validationState="warning" />
  ))
  .add('with success', () => (
    <PLAYFieldGroup
      help=""
      id="email"
      label="Email"
      onChange={() => {}}
      type="text"
      validationState="success"
      value="john.doe@omise.co"
    />
  ));
