import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [
        'Depósito',
        'Saque',
        'Transferência'
    ]
}

const transactionTypesSlices = createSlice({
    name: 'transactionTypes',
    initialState,
})

export default transactionTypesSlices.reducer;