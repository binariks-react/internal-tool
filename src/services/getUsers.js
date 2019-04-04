import axios from 'axios';

export default () => axios.get('SomeUrl')
  .then(res => res.data);
