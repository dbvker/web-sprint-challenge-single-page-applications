import React from "react";

// Components
import ImageHeader from "./components/imageHeader/ImageHeader";
import RestaurantList from "./components/restaurantList/RestaurantList";

const App = () => {
  return (
    <>
      <ImageHeader title='Your favorite food, delivered while coding' button='Pizza?' linkTo='/pizza' />
      <RestaurantList />
    </>
  );
};
export default App;