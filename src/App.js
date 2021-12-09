import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Product from './components/Product';
import About from './components/about';
import Contact  from './components/Contact';
import {css} from "@emotion/react";
import HashLoader from 'react-spinners/HashLoader';
import Timeline from './components/timeline';
import Footer from './components/footer'



function App() {
const[loading,setLoading] = useState(false);
const override = css`
margin-top:20%;
margin-left: 45%;
display:flex;
`;

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)
},[])

  return (
    <div className="App">

          {
            loading ? <HashLoader color={"#455a64"} loading={loading} css={override} size={100} />
            :
            <>
              <Navbar />
              <Header/>
              <Timeline/>
              <Product/>
              <About/>
              <Contact/>
              <Footer/>
            </>
          }
         
    </div>
  );
}

export default App;
