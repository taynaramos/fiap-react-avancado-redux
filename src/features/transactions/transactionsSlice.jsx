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
      state.transactions.push({
        ...action.payload,
        id: state.transactions.length + 1,
        date: new Date().toISOString()
      })
    }
  }
});

export const selectTransactions = createSelector(state => state.transactions.transactions, (transactions) => {
  return transactions.map(t => {
    return {
      ...t, 
      date: new Date(t.date)
    }
  })
})

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;