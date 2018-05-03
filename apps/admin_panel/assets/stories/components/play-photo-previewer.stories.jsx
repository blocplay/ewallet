import React from 'react';
import { storiesOf } from '@storybook/react';
import PLAYPhotoPreviewer from '../../src/components/PLAYPhotoPreviewer';
import User from '../../public/images/user_icon_placeholder.png';

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

storiesOf('PLAYPhotoPreviewer', module)
  .addDecorator(container)
  .add('normal', () => <PLAYPhotoPreviewer onFileChanged={() => {}} />)
  .add('hide upload button', () => (
    <PLAYPhotoPreviewer onFileChanged={() => {}} showUploadBtn={false} />
  ))
  .add('show close button', () => (
    <PLAYPhotoPreviewer onFileChanged={() => {}} showCloseBtn showUploadBtn={false} />
  ))
  .add('with different placeholder', () => (
    <PLAYPhotoPreviewer img={User} onFileChanged={() => {}} showUploadBtn={false} />
  ));
