import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Boutiques from "./components/Boutiques";
import BoutiqueDetail from "./components/BoutiqueDetailPage";
import OwnedBoutiques from "./components/OwnedBoutiques/OwnedBoutiques";
import CreateBoutiqueForm from "./components/CreateBoutiqueForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/boutiques/owned">
            <OwnedBoutiques />
          </Route>
          <Route exact path="/boutiques/:boutiqueId">
            <BoutiqueDetail />
          </Route>
          <Route exact path='/'>
            <Boutiques />
          </Route>
          <Route path="/new">
            <CreateBoutiqueForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
