import { configureStore } from "@reduxjs/toolkit";
import transactions from "src/features/transactions/transactionsSlice";
import transactionTypes from 'src/features/transactionTypes/transactionTypesSlice.jsx';

const store = configureStore({
    reducer: {
        // add list of slices
        transactionTypes,
        transactions
    }
})

export default store;