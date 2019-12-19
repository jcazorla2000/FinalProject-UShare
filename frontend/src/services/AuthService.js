import axios from 'axios';
const baseURL = 'https://still-retreat-53219.herokuapp.com/';

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logout: async () => {
    return await service.get('/logout');
  },
  create: async (form) => {
    return await service.post('/create', form);
  },
  feed: async (coords) => {
    return await service.post('/feed', coords);
  },
  endRide: async (rideId) => {
    return await service.post('/myRides', rideId);
  }
};

export default MY_SERVICE;
