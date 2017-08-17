'use strict';

const experiments = {

};

module.exports = {
  title: 'Wix Stack React Example Application',
  debug: true,
  experiments: JSON.stringify(experiments),
  locale: 'en',
  basename: '/',
  clientTopology: {
    staticsBaseUrl: 'http://tdd-workshop-tic-tac-toe-client-yanivef.c9users.io:8081/'
  },
  newRelicEndUserHeader: '',
  newRelicEndUserFooter: ''
};
