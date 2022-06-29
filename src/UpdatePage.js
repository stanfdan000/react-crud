
import { React } from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getRestaurant, updateRestaurant, deleteRestaurant } from './services/fetchUtils';

export default function UpdatePage() {
  const { id } = useParams();
  const { push } = useHistory();
  const [formName, setFormName] = useState('');
  const [formType, setFormType] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formPrice, setFormPrice] = useState(1);

  useEffect(() => {
    async function fetchRestaurant() {
      const restaurant = await getRestaurant(id);
      setFormName(restaurant.name);
      setFormType(restaurant.type);
      setFormCity(restaurant.city);
      setFormPrice(restaurant.price);
    }
    fetchRestaurant();
  }, [id, setFormPrice]);

  async function handleDelete() {
    await deleteRestaurant(id);
    push('/restaurant');
  }

  async function handleUpdate(e) {
    e.preventDefault();
    await updateRestaurant(id, {
      name: formName,
      type: formType,
      city: formCity,
      price: formPrice,
    });
    history.push('/restaurant');
  }

  return (
    <div className='restaurantsDetails'>
      <div>
        <h3>Update a Restaurant</h3>
        <form onSubmit={handleUpdate}>
          <label>Name
            <input value={formName} onChange={e => setFormName(e.target.value)}/>
          </label>
          <label>Type
            <input value={formType} onChange={e => setFormName(e.target.value)}/>
          </label>
          <label>City
            <input value={formCity} onChange={e => setFormName(e.target.value)}/>
          </label>
          <label>Price
            <input value={formPrice} onChange={e => setFormName(e.target.value)}/>
          </label>
        </form>
        <button className='delete' type='button' onClick={handleDelete}>Delete Restaurant</button>
      </div>
    </div>
  );

}