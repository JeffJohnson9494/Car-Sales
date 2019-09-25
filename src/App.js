import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { buyItem, removeFeature } from "./actions/actions.js";
              //im trying to think of a better wat to have all of this information called in here
const App = ({ removeFeature, buyItem, car, store, additionalPrice }) => {
  //delete feature function called from actions.js
  const deleteFeature = item => {
    removeFeature(item);
  };
  //purchase item function called from actions.js
  const purchaseItem = (e, item) => {
    e.preventDefault();
    buyItem(item);
  };
  //the app components
  return (
    <div className="boxes">
      <div className="box">
        
        <Header car={car} />
        <AddedFeatures car={car} remove={deleteFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} add={purchaseItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};
//mapping state which is coming from the reducer?
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { buyItem, removeFeature }
)(App);
