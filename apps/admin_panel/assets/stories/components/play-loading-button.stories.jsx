import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PLAYLoadingButton from '../../src/components/PLAYLoadingButton';
import store from '../../src/store/store';

const container = {
  width: '300px',
  paddingLeft: '2rem',
  paddingTop: '2rem',
};

const reduxDecorator = story => (
  <Router>
    <Provider store={store}>
      {story()}
    </Provider>
  </Router>
);

const smallContainer = story => (
  <div style={container}>
    {story()}
  </div>
);

storiesOf('PLAYLoadingButton', module)
  .addDecorator(smallContainer)
  .addDecorator(reduxDecorator)
  .add('normal state', () => (
    <PLAYLoadingButton>
      Save
    </PLAYLoadingButton>
  ))
  .add('loading state', () => (
    <PLAYLoadingButton loading />
  ))
  .add('white button', () => (
    <PLAYLoadingButton className="btn-play-white">
      Save
    </PLAYLoadingButton>
  ))
  .add('white button with loading', () => (
    <PLAYLoadingButton className="btn-play-white" loading />
  ))
  .add('red button', () => (
    <PLAYLoadingButton className="btn-play-red">
      Save
    </PLAYLoadingButton>
  ))
  .add('red button with loading', () => (
    <PLAYLoadingButton className="btn-play-red" loading />
  ));
