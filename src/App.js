import React from "react";
import { Switch, Route } from "react-router-dom";


// Components
import ImageHeader from "./components/imageHeader/ImageHeader";
import RestaurantList from "./components/restaurantList/RestaurantList";
import Pizza from "./views/Pizza";
import Confirmation from "./views/Confirmation";

const App = () => {
  return (
    <>

      <Switch>
            <Route exact path='/'>
              <ImageHeader title='Your favorite food, delivered while coding' button='Pizza?' linkTo='/pizza' />
              <RestaurantList />
            </Route>
            <Route path='/pizza' component={Pizza} />
            <Route path='/confirmation' component={Confirmation} />
        </Switch>
    </>
  );
};
export default App;