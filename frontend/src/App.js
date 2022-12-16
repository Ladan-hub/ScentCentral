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
import EditBoutiqueForm from "./components/EditBoutiqueForm";
import ReviewForm from "./components/CreateReviewForm";
import EditReview from "./components/EditReviewForm";
import CreatePerfumeForm from "./components/CreatePerfumeForm";
import EditPerfumeForm from "./components/EditPerfumeForm";
import OwnedBookings from "./components/OwnedBookings";
import CreateBookingForm from "./components/CreateBookingForm";
import EditBookingForm from "./components/EditBookingForm";

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
          <Route exact path="/new">
            <CreateBoutiqueForm />
          </Route>
          <Route exact path="/bookings">
            <OwnedBookings />
          </Route>
          <Route exact path="/boutiques/owned">
            <OwnedBoutiques />
          </Route>
          <Route exact path="/boutiques/:boutiqueId">
            <BoutiqueDetail />
          </Route>
          <Route exact path="/boutiques/:boutiqueId/edit">
            <EditBoutiqueForm />
          </Route>
          <Route exact path="/boutiques/:boutiqueId/review">
            <ReviewForm />
          </Route>
          <Route exact path="/boutiques/:boutiqueId/perfume">
            <CreatePerfumeForm />
          </Route>
          <Route exact path="/boutiques/:boutiqueId/booking">
            <CreateBookingForm />
          </Route>
          <Route exact path="/bookings/:bookingId/edit">
            <EditBookingForm />
          </Route>
          <Route exact path="/:boutiqueId/perfume/:perfumeId/edit">
            <EditPerfumeForm />
          </Route>
          <Route path="/:boutiqueId/reviews/:reviewId/edit">
            <EditReview />
          </Route>
          <Route exact path="/">
            <Boutiques />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
