import { configureStore } from "@reduxjs/toolkit";
import todoSlices from './todoslices'

const store=configureStore({
    reducer:{
        todos:todoSlices
    }
})

export default store;