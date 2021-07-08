import * as Config from "./constants/Config";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import Friend from "./pages/Friend/Friend";

const routes = [
  {
    path: Config.PAGE_LOGIN,
    exact: true,
    main: () => <Login />,
  },
  {
    path: `${Config.PAGE_MESSENGER}`,
    exact: true,
    main: ({ match }) => <Messenger match={match} />,
  },
  {
    path: `${Config.PAGE_MESSENGER}/:slug`,
    exact: true,
    main: ({ match }) => <Messenger match={match} />,
  },
  {
    path: Config.PAGE_FRIEND,
    exact: true,
    main: () => <Friend />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routes;
