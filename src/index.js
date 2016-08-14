import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import RefreshLoad from 'components/PullRefresh';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render((
  <Router key="router" history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute key="Refresh" component={RefreshLoad}/>
    </Route>
  </Router>
), document.getElementById('app'));
