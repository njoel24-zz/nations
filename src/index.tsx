import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

// redux
import { createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';

// redux/react
import { Provider, connect } from "react-redux";

import appReducer from './reducers/reducer';
import { getAllCountries } from "./actions/actions";



const store = createStore(appReducer, applyMiddleware(thunk));

store.dispatch(getAllCountries())

ReactDOM.render(
	<Provider store={store}>
  			<App />
  	</Provider>,
  document.getElementById('root')
)

