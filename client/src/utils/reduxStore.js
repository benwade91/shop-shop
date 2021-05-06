import { createStore } from 'redux';
import { useDispatch, useSelector} from 'react-redux'

import React, { createContext, useContext } from "react";
import { reducer } from './reduxReducer';


//REDUX
import { Provider } from 'react-redux';
const store = createStore(reducer)

// const StoreContext = createContext();
// const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
      });
    console.log(state);
    return <Provider store={store} value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return [useSelector, useDispatch]
  };

export { StoreProvider, useStoreContext };