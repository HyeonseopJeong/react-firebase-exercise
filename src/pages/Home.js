import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/auth">Auth</Link>
      <br /><br /><br />
      <Link to="/crud">Crud</Link>
    </div>
  );
};

export default Home;