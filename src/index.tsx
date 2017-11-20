import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

// redux
import { createStore } from "redux";

// redux/react
import { Provider, connect } from "react-redux";

import appReducer from './reducers/reducer';

const store = createStore(appReducer);

// store.dispatch(initMatch())

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
)

