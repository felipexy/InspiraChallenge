import { createStore } from 'redux';
import { combineReducers } from 'redux';
import formatValues from '../utils/formatBRL'

const INITIAL_STATE_PACKAGE = {
  quantity: 0,
  price: 0
}

const INITIAL_STATE_SUMMARY = {
  summary: []
}

const INITIAL_STATE = { package: 0, price: 0 };

const priceCalculator = (pack) => {
  if (pack === "") {
    return 0;
  }
  let price = 0;
  if (parseInt(pack) >= 1000 && parseInt(pack) < 2000) {
    price = (0, 22 * pack);
  } else if (parseInt(pack) >= 2000 && parseInt(pack) < 3000) {
    price = (0, 22 * pack) - ((5 / 100) * (0, 22 * pack));
  } else if (parseInt(pack) >= 3000 && parseInt(pack) < 4000) {
    price = (0, 22 * pack) - ((10 / 100) * (0, 22 * pack));
  } else if (parseInt(pack) >= 4000 && parseInt(pack) < 5000) {
    price = (0, 22 * pack) - ((15 / 100) * (0, 22 * pack));
  } else if (parseInt(pack) === 5000) {
    price = (0, 22 * pack) - ((20 / 100) * (0, 22 * pack));
  } else if (parseInt(pack) < 1000) {
    price = (0, 25 * pack);
  }

  const result = formatValues(price/100);

  return result;
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
