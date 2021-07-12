import "./App.scss";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import PrivateRouter from "./components/authetication/privateRouter";
import PublicRouter from "./components/authetication/publicRouter";
import VerticalBar from "./components/layouts/vertical/vertical";
import { Header } from "./components/layouts/header";
import { User } from "./components/user/user";
import { News } from "./components/news/news";
import { Events } from "./components/events/events";
import { Videos } from "./components/video/video";
import { NewsForm } from "./components/news/newsForm";
import { EventsForm } from "./components/events/eventsForm";
import { VideosForm } from "./components/video/videoForm";
import { SignIn } from "./components/authetication/signin";
import { useEffect } from "react";
import { Logout } from "./components/authetication/logout";
import "react-notifications/lib/notifications.css";
import Lists from "./components/whitelist/whitelist";
import Fee from "./components/fee/fee";

function App() {
  window.openNotification = function (type, message, title) {
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success(message, title);
        break;
      case "warning":
        NotificationManager.warning(
          "Warning message",
          "Close after 3000ms",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Error message", "Click me!", 5000, () => {
          alert("callback");
        });
        break;
      default:
        break;
      // }
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <PublicRouter path="/signin" component={SignIn} />
          <AppLayout />
        </Switch>
      </HashRouter>
      <NotificationContainer />
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="mainContainer">
      <VerticalBar />
      <div className="contentContainer">
        <Header />
        <Switch>
          <PrivateRouter path="/users" component={User} />
          <PrivateRouter path="/news" component={News} />
          <PrivateRouter path="/events" component={Events} />
          <PrivateRouter path="/videos" component={Videos} />
          <PrivateRouter path="/newsForm" component={NewsForm} />
          <PrivateRouter path="/eventsForm" component={EventsForm} />
          <PrivateRouter path="/videosForm" component={VideosForm} />
          <PrivateRouter path ="/whitelist" component={Lists}/>
          <PrivateRouter path="/fee" component={Fee} />
          <PrivateRouter path="/logout" component={Logout} />
        </Switch>
      </div>
    </div>
  );
};
export default App;
