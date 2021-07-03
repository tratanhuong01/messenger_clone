import * as Config from "./constants/Config";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import Friend from "./pages/Friend/Friend";
import Profile from "./pages/Profile/Profile";

const routes = [
  {
    path: Config.PAGE_LOGIN,
    exact: true,
    main: () => <Login />,
  },
  {
    path: Config.PAGE_MESSENGER,
    exact: true,
    main: () => <Messenger />,
  },
  {
    path: Config.PAGE_FRIEND,
    exact: true,
    main: () => <Friend />,
  },
  {
    path: Config.PAGE_PROFILE,
    exact: true,
    main: () => <Profile />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routes;
