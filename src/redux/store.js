import { createStore, compose } from "redux"

import { reducer } from "./reducer.js"

export const store = createStore(
  reducer,
  {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)