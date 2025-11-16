import axios from 'axios';

export const getAllElections = () => {
  return axios.get('https://online-voting-system-vw8v.onrender.com'); // Replace with your backend API URL
};
