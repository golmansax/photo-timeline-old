import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import {
  HomePageLayout,
  HomeMainDisplay,
  HomeEventDisplay,
} from './components';

const homePageRoutes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomePageLayout}>
      <IndexRoute component={HomeMainDisplay} />
      <Route path='events/:id' component={HomeEventDisplay} />
    </Route>
  </Router>
);

export default homePageRoutes;
