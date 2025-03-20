import { configureStore } from "@reduxjs/toolkit";

import transactionTypes from 'src/features/transactionTypes/transactionTypesSlice.jsx';

const store = configureStore({
    reducer: {
        // add list of slices
        transactionTypes
    }
})

export default store;