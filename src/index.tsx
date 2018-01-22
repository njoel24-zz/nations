import * as React from "react";
import * as ReactDOM from "react-dom";

import { MyApp } from "./components/App";

// redux
import { createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';

// redux/react
import { Provider, connect } from "react-redux";

import appReducer from './reducers/reducer';
import { getAllCountries } from "./actions/actions";

const store = createStore(appReducer, applyMiddleware(thunk));

store.dispatch(getAllCountries());

const Root: React.SFC<{}> = () => (
	<Provider store={store}>
	  <MyApp />
	</Provider>
  )

  window.addEventListener('DOMContentLoaded', () => {
	const rootEl = document.getElementById('root')
	ReactDOM.render(<Root />, rootEl)
  })