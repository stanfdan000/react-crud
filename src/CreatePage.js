import React from 'react';
import { useState } from 'react';
import { createRestaurant } from './services/fetchUtils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const { push } = useHistory();
  const [formName, setFormName] = useState('');
  const [formType, setFormType] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPrice, setFormPrice] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const restaurant = {
      name: formName,
      type: formType,
      city: formCity,
      price: formPrice,
    };
    await createRestaurant(restaurant);
    push('/restaurants');
  }
  return (
    <div>
      <h2>Create Here</h2>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input name='name' value={formName} onChange={e => setFormName(e.target.value)}/> 
        </label>
        <label>Type
          <input name='type' value={formType} onChange={e => setFormType(e.target.value)}/>
        </label>
        <label>City
          <input name='city' value={formCity} onChange={e => setFormCity(e.target.value)}/>
        </label>
        <label>Price
          <input name='price' value={formPrice} onChange={e => setFormPrice(e.target.value)}/>
        </label>
        <button>Add Restaurant</button>
      </form>
    </div>
  );
}