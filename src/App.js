
import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Dataprovider } from './components/Dataprovider'
import Detail from './components/Detail'
import Footer from './components/Footer'
import Footertwo from './components/Footertwo'
import Page from './components/Page'



function App() {
  
    return (
        <Dataprovider>
        <div className="app">
            <Router>
                    <Header />
                    <Page />
                <section>
                    <Routes>
                        <Route path="products" element={<Products />} />
                        <Route path="products/:id" element={<Detail />} />
                
                    </Routes>
                </section>
            </Router>
            </div>
            
            <Footer />
            <Footertwo/>
            </Dataprovider>
    );
    }


export default App;