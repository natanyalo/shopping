import {configureStore} from "@reduxjs/toolkit"
import { cartSlice } from "./cart-slice";


const store = configureStore({
    reducer: {  carts:cartSlice.reducer }, //it could be single reducer not object {counter:counterSlice.reducer}
  });

  export type RootState = ReturnType<typeof store.getState>;
  export default store ;