import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";

 const Store=configureStore({

    reducer:{
     Counter:CounterReducer
    }
})
export default Store