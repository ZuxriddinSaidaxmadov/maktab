import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHead from "./NavbarHead";
import Ustozlar2 from "./Ustozlar2";
import YandexMap from "./YandexMap";
import Baxtiyor from "../Malumotnoma/Baxtiyor";
import Faxriddin from "../Malumotnoma/Faxriddin";
import Esongul from "../Malumotnoma/Esongul";
import Ziyodulla from "../Malumotnoma/Ziyodulla";
import Qasim from "../Malumotnoma/Qasim";
import Nargiza from "../Malumotnoma/Nargiza";
import Eldor from "../Malumotnoma/Eldor";
import Nigora from "../Malumotnoma/Nigora";
import Muhammadali from "../Malumotnoma/Muhammadali";
import Botir from "../Malumotnoma/Botir";
import Yangiliklar from "./Yangiliklar";
import Galereya from "./Galereya";

const Barchasi = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <NavbarHead />
        </>
        <Routes>
          <Route exact path="/" element={<Navbar />}></Route>
          <Route path="/ustoz" element={<Ustozlar2 />}></Route>
          <Route path="/baxtiyor" element={<Baxtiyor />}></Route>
          <Route path="/faxriddin" element={<Faxriddin />}></Route>
          <Route path="/esongul" element={<Esongul />}></Route>
          <Route path="/ziyodullo" element={<Ziyodulla />}></Route>
          <Route path="/qasim" element={<Qasim />}></Route>
          <Route path="/nargiza" element={<Nargiza />}></Route>
          <Route path="/eldor" element={<Eldor />}></Route>
          <Route path="/nigora" element={<Nigora />}></Route>
          <Route path="/muhammadali" element={<Muhammadali />}></Route>
          <Route path="/botir" element={<Botir />}></Route>
          <Route path="/yangiliklar" element={<Yangiliklar />}></Route>
          <Route path="/galereya" element={<Galereya />}></Route>
        </Routes>
        <YandexMap />
      </BrowserRouter>
    </div>
  );
};

export default Barchasi;
