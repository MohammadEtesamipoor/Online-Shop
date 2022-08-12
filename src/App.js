import { GetDataProducts } from 'apis';
import { useEffect, useState } from 'react';
import { Routing } from 'Routes/Routes';
import './Assets/Styles/Components/app.scss';
import Layout from './Layouts/Layout.jsx';
function App() {
  const [DataProducts,setDataProducts] =useState([]);
  return (
    <div dir="rtl" className="App">
      <Routing />
    </div>
  );
}

export default App;
