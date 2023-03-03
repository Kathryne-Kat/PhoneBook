// import axios from 'axios';
import { instance } from 'redux/user/operations';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsApi = async () => {
  const { data } = await instance.get('/contacts');
  // console.log(data);
  return data;
};
export const addContactApi = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};
export const deleteContactApi = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
