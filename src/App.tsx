import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Searchbar from './components/input';

const App: React.FC = () => {
  return (
    <div className="App">
     <Searchbar setSearch={function (value: React.SetStateAction<string | undefined>): void {
        throw new Error('Function not implemented.');
      } } setGeolocate={function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
      } } geolocate={false}/>
    </div>
  );
};

export default App;
