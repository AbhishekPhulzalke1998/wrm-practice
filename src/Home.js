import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Application</h1>
        <p>This is the Home Page where you can navigate to any particular required page.</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/Login" className="nav-link">Go to Login Page</Link>
          </li>
          <li>
            <Link to="/Parts" className="nav-link">Explore PartsTable</Link>
          </li>
          <li>
            <Link to="/curd/:keyed_name" className="nav-link">Check out CurdUI</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p><b>This is React Based Application</b></p>
      
      </footer>
    </div>
  );
};

export default Home;
