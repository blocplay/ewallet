import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../src/store/store';
import PLAYMemberItem from '../../src/components/PLAYMemberItem';

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

const reduxDecorator = story => (
  <Router>
    <Provider store={store}>
      {story()}
    </Provider>
  </Router>
);

const members = [
  {
    imageUrl: 'https://6f553f294d9c2b381dc8-21a51a0c688da9b8f39d1cd2f922214e.ssl.cf3.rackcdn.com/photos/131-3-4.jpg',
    email: 'thibault@omise.co',
    accountRole: 'TokenPlay Software Developer Team Lead',
  },
  {
    imageUrl: 'https://6f553f294d9c2b381dc8-21a51a0c688da9b8f39d1cd2f922214e.ssl.cf3.rackcdn.com/photos/146-0-4.jpg',
    email: 'phuchit@omise.co',
    accountRole: 'TokenPlay Mobile App Developer',
  },
  {
    imageUrl: 'https://6f553f294d9c2b381dc8-21a51a0c688da9b8f39d1cd2f922214e.ssl.cf3.rackcdn.com/photos/139-0-4.jpg',
    email: 'mederic@omise.co',
    accountRole: 'TokenPlay Mobile App Developer',
  },
];

storiesOf('PLAYMemberItem', module)
  .addDecorator(container)
  .addDecorator(reduxDecorator)
  .add('normal', () => (
    <div>
      <PLAYMemberItem
        member={members[0]}
      />
      <PLAYMemberItem
        member={members[1]}
      />
      <PLAYMemberItem
        member={members[2]}
      />
    </div>
  ));
