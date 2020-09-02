import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "./Firebase";
import rootReducer from "./redux/reducers/rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import thunk from "redux-thunk";
import App from "./App";
import { createFirestoreInstance } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
