import React, { useReducer } from 'react';
import { Loading, Get_Shoes, Get_Shoe_Details } from '../types';
import { ShoeContext } from './ShoeContext';
import { ShoeReducer } from './ShoeReducer';
import axios from 'axios';

export const ShoeState = ({ children }) => {
  const initialState = {
    loading: false,
    shoesList: [],
    shoeDetail: {},
  };

  const [state, dispatch] = useReducer(ShoeReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: Loading,
    });
  };

  const getShoes = async () => {
    setLoading();
    var options = {
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: { limit: '100' },
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': 'ef1d43aad2msh12827253a8427d2p12061ejsn87a9f302f2bd',
      },
    };

    try {
      const res = await axios.request(options);
      dispatch({
        type: Get_Shoes,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getShoeById = async (id) => {
    setLoading();
    var options = {
      method: 'GET',
      url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': 'ef1d43aad2msh12827253a8427d2p12061ejsn87a9f302f2bd',
      },
    };

    try {
      const res = await axios.request(options);
      dispatch({
        type: Get_Shoe_Details,
        payload: res.data.results[0],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShoeContext.Provider
      value={{
        loading: state.loading,
        shoesList: state.shoesList,
        shoeDetail: state.shoeDetail,
        getShoes,
        getShoeById,
      }}
    >
      {children}
    </ShoeContext.Provider>
  );
};
