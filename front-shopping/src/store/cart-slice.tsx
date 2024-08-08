import { createSlice, configureStore } from "@reduxjs/toolkit";

export type CartProps = {
    totalAmount: number;
    items: {
        id:string
        name: string;
        quantity: number;
        total: number;
        price: number;
    }[];
}
const initCart:CartProps = {
    totalAmount: 0,
    items: [],
}


const cartSlice = createSlice({
  name: "carts",
  initialState: initCart,
  reducers: {
    addCarts:(state, actions)=>{
        console.log(actions.payload)
        state.totalAmount += actions.payload.price;
        const existingItem = state.items.find((item) => item.id === actions.payload.id);
        if(existingItem){
            existingItem.quantity+=1; 
            existingItem.total+=actions.payload.price;
            const index = state.items.findIndex((item) => item.id === actions.payload.id);
            state.items[index] = existingItem;
            return state
        }
        state.items = [...state.items,{quantity:1,total:actions.payload.price ,...actions.payload}];
        return state;

    },
    remove:(state, actions)=>{
     const existingItem = state.items.find((item) => item.id === actions.payload.id);
     if(existingItem){
        state.totalAmount -= existingItem.price;
        const index = state.items.findIndex((item) => item.id === actions.payload.id);
        state.items[index] = existingItem;
        state.items.splice(index, 1);
        return state
     }
    }, clear:()=>{
        return initCart;
    }

  },
});

const actionCart = cartSlice.actions;

export { actionCart, cartSlice };
