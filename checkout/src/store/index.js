import { createStore } from 'redux';
import { combineReducers } from 'redux';

const INITIAL_STATE_PACKAGE = {
  quantity: 0,
  price: 0
}

const INITIAL_STATE_SUMMARY = {
  summary: []
}

const INITIAL_STATE = { package: 0, price: 0 };

const priceCalculator = (pack) => {
  let price = 0;

  if (pack >= 1000 && pack < 2000){
    price = (0,22 * pack);
  } else if ( pack >= 2000 && pack < 3000 ){
    price = (0,22 * pack) - ((5/100) * (0,22 * pack));
  } else if ( pack >= 3000 && pack < 4000 ){
    price = (0,22 * pack) - ((10/100) * (0,22 * pack));
  } else if ( pack >= 4000 && pack < 5000 ){
    price = (0,22 * pack) - ((15/100) * (0,22 * pack));
  } else if ( pack === 5000 ){
    price = (0,22 * pack) - ((20/100) * (0,22 * pack));
  } else if ( pack < 1000 ){
    price = (0,25 * pack);
  }

  return price/100;
}

function SliderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_PRICE': 
      const pricePackage = priceCalculator(action.package);
      return {
        package: action.package,
        price: pricePackage
      };
    default:
      return state;
  }
}

function packageReducer(state = INITIAL_STATE_PACKAGE, action) {
  switch (action.type) {
    case 'UPDATE_CHOSEN_PACKAGE':
      return {
        quantity: action.payload.quantity,
        price: action.payload.price
      };
    default:
      return state;
  }
}

function summaryReducer(state = INITIAL_STATE_SUMMARY, action) {
  switch (action.type) {
    case 'ADD_TO_SUMMARY':
      state.summary.push(action.summary);
      return {
        ...state,
        summary: [
          ...state.summary
        ]
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  chosenPackage: packageReducer,
  summary: summaryReducer,
  slider: SliderReducer
})

const store = createStore(rootReducer);

export default store;
