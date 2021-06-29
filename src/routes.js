import * as Config from "./constants/Config";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
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
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routes;
