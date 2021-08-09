import React from "react"
import {Button} from "./components"
import {Block} from "./components"
import {Auth} from "./pages";
import {Route, Switch} from "react-router-dom";
import {LoginForm} from "./modules";
import Home from "./pages/Home";


function App() {
  return (
    <div className="wrapper">
      <Route exact path={['/','/login', '/register' ]} component={Auth} />
      <Route exact path={'/im'} component={Home} />

    </div>
  );
}

export default App;