import { Loading, Get_Shoes, Get_Shoe_Details } from '../types';

export const ShoeReducer = (state, action) => {
  switch (action.type) {
    case Loading:
      return {
        ...state,
        loading: true,
      };
    case Get_Shoes:
      return {
        ...state,
        shoesList: action.payload,
        loading: false,
      };
    case Get_Shoe_Details:
      return {
        ...state,
        shoeDetail: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
