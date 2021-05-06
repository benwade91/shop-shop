import React, { createContext, useContext } from "react";
import useProductReducer from './reducers';
import {useSelector, useDispatch} from 'react-redux'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
      });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return [useDispatch, useSelector]
  };

export { StoreProvider, useStoreContext };