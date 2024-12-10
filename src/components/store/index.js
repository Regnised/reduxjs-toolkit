import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './auth';
import CounterReducer from './counter';

const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});

export default store;
