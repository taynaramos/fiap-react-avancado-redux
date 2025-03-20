import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    // list of actions
    addTransaction: (state, action) => {
      let value = Math.abs(action.payload.value);

      if (action.payload.type != "Depósito") {
        value = -value;
      }

      state.transactions.push({
        ...action.payload,
        value,
        id: state.transactions.length + 1,
        date: new Date().toISOString(),
      });
    },
  },
});

export const selectTransactions = createSelector(
  (state) => state.transactions.transactions,
  (transactions) => {
    return transactions.map((t) => {
      return {
        ...t,
        date: new Date(t.date),
      };
    });
  }
);

export const selectCurrentBalance = createSelector(
  selectTransactions,
  (transaction) => transaction.reduce((balance, t) => balance + t.value, 0)
);

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
