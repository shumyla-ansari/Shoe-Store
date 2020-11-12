import React from 'react';
import Video from './components/Video'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import { DataProvider } from './components/Context'
import Details from './components/Details'
import Cart from './components/Cart'


function App() {

  return (
    <DataProvider>
    <div className="App">
      <Navbar/>
        <Routes>
        <Route path="/" element={<Video />} />
        <Route
          path="/men"
          element={<Men />}
        />
        <Route
        path="men/:id" element={ <Details /> }
        />
        <Route
          path="/women"
          element={<Women />}
        />
        <Route
          path="/kids"
          element={<Kids />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
      <Navbar/>
    {/* <Video/> */}
    </div>
    </DataProvider>);
}
// Video by Pressmaster from Pexels
//Video by fauxels from Pexels
//Video by cottonbro from Pexels
//Video by cottonbro from Pexels
export default App;
