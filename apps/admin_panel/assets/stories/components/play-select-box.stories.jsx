import React from 'react';
import { storiesOf } from '@storybook/react';
import PLAYSelectBox from '../../src/components/PLAYSelectBox';

const containerStyle = {
  width: '300px',
  paddingLeft: '2rem',
  paddingTop: '2rem',
};

const container = story => (
  <div style={containerStyle}>
    {story()}
  </div>
);

storiesOf('PLAYSelectBox', module)
  .addDecorator(container)
  .add('Empty options', () => <PLAYSelectBox label="Select box" onOptionChanged={() => {}} />)
  .add('With default options 2', () => (
    <PLAYSelectBox
      defaultValue="Option 2"
      label="Select box"
      onOptionChanged={() => {}}
      options={['Option 1', 'Option 2', 'Option 3']}
    />
  ));
