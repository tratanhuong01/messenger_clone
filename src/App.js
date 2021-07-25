import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";

function showAllLinks(routes) {
  //

  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
    return result;
  }
}
function App(props) {
  return (
    <Router>
      <Switch>{showAllLinks(routes)}</Switch>
    </Router>
  );
}

export default App;
