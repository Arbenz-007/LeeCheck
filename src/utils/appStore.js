import { configureStore } from '@reduxjs/toolkit';
import contestReducer from './contestSlice'

const appStore = configureStore({
    reducer:{
        contests:contestReducer,

    },
});

export default appStore;