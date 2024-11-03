"use client"; // Add this line to make the component a Client Component

import React from 'react';

const AddtoCart = () => {
  return (
    <button onClick={() => console.log('Added to cart')}>Add to cart</button>
  );
};

export default AddtoCart;
