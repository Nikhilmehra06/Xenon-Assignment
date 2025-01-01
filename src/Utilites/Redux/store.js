import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import * as SLICE from "./slices/index";
import storage from 'redux-persist/lib/storage';
// import { storageSession } from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';


const rootReducer = combineReducers({
  authSlice: SLICE.authslice,
})

const appReducer = (state, action) => {
  console.log("APP reducer ");
  if (action.type === 'CLEAR_STATE') {
    state = undefined; 
  }
  return rootReducer(state, action);
};

// for local storage 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
  reducer : persistedReducer,
});

setupListeners(store.dispatch);

export const RootState = store.getState;


export const persistor = persistStore(store)

export default store;
