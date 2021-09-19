import React, { useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ShoeContext } from '../../Context/ShoeStore/ShoeContext';
import spinner from '../Shoes/spinner.gif';

export const LaunchShoe = () => {
  const shoeContext = useContext(ShoeContext);

  const { loading, shoeDetail, getShoeById } = shoeContext;

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getShoeById(id);
    //eslint-disable-next-line
  }, []);

  const shoes = id;

  if (!shoes) return <h2>Not Found</h2>;

  const { name, media, brand, retailPrice, colorway, styleId } = shoeDetail;

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
    <div className='product'>
      <div className='shoe'>
        <button onClick={() => navigate('../')}>
          <span className='material-icons'>arrow_back</span>
        </button>
        <img src={media && media.imageUrl} alt={name} />
        <p>
          {brand}/{name}/{colorway}
        </p>
      </div>
      <div className='details'>
        <h4>{name}</h4>
        <br />
        <h3>{brand}</h3>
        <p>{styleId}</p>
      </div>
      <div className='footer'>
        <p>Price: ${retailPrice}</p>
        <Link to='CheckOut'>
          <button>Add to Cart</button>
        </Link>
      </div>
    </div>
  );
};
