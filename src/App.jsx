import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MenuPage from "./pages/MenuPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage"
import SearchFilter from "./pages/SearchFilter"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/search-page" element={<SearchFilter/>}/>
      </Routes>
    </div>
  );
};

export default App;
