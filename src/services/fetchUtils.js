
import { checkError, client, } from './client';

export function getUser() {
  return client.auth.session();
}
export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function createRestaurant(restaurant) {
  const response = await client
    .from('restaurant')
    .insert([restaurant]);
  return checkError(response);
}

export async function getRestaurants() {
  const response = await client
    .from('restaurant')
    .select('*');
  return checkError(response);
}

export async function getRestaurant(id) {
  const response = await client
    .from('restaurant')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}

export async function updateRestaurant(id, updatedRestaurant) {
  const response = await client
    .from('restaurants')
    .update(updatedRestaurant)
    .match({ id });
  return checkError(response);
}

export async function deleteRestaurant(id) {
  const response = await client
    .from('restaurant')
    .delete()
    .match({ id });
  return checkError(response);
}

