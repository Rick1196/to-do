import { React } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";
import Container from '@mui/material/Container';
import history from "./router/history";
import routes from "./router/routes";
import RouteWithSubroutes from "./components/RouteWithSubroutes";
import Navigation from './components/navigation/navgation';

function App() {
  return (
    <>
      <Router history={history}>
        <CssBaseline />
        <Navigation />
        <Container fixed maxWidth="sm" >
          <Suspense fallback={<div>Loading ...</div>}>

            <Switch>
              {routes.map((route) => (
                <RouteWithSubroutes key={route.key} {...route} />
              ))}
              <Route component={() => <h1>Holy guacamole we do Not found the page you are looking for!!</h1>} />
            </Switch>
          </Suspense>
        </Container>
      </Router>
    </>
  );
}


export default App;
