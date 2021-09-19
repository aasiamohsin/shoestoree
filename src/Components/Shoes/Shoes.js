import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from '../../Context/ShoeStore/ShoeContext';
import spinner from './spinner.gif';

export const Shoes = () => {
  const shoeContext = useContext(ShoeContext);

  const { loading, shoesList, getShoes } = shoeContext;

  useEffect(() => {
    getShoes();
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <img
        style={{
          height: '300px',
          display: 'block',
          margin: '300px auto',
        }}
        src={spinner}
        alt='loading'
      />
    );

  return (
    <div className='shoe-container'>
      <ul>
        {shoesList.map((shoeData) => (
          <li key={shoeData.id}>
            <Link to={`/ShoeItem/${shoeData.id}`}>
              <div>
                <span>{shoeData.year}</span>
                <span>For {shoeData.gender}</span>
              </div>
              <img src={shoeData.media.imageUrl} alt={shoeData.name} />
              <h3>{shoeData.title}</h3>
              <h3>${shoeData.retailPrice}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
