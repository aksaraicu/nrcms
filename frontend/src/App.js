import PostList from "./components/dashboard/PostList";
import TambahPost from "./components/dashboard/TambahPost";
import Navbar from "./components/main/Navbar.js";
import EditPost from "./components/dashboard/EditPost.js";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/main/Hero";
import PostArchive from "./components/archives/PostArchive";
import PostSingle from "./components/singles/PostSingle";
import Footer from "./components/main/Footer.js";
import ProfilHero from "./components/tentang/ProfilHero";
import Skills from "./components/tentang/Skills";
import Cta from "./components/main/Cta";
import KontakHero from "./components/kontak/KontakHero";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/posts" element={<PostList />} />

        <Route path="/blog" element={<PostArchive />} />

        <Route path="/tentang" element={<><ProfilHero /><Skills/><Cta/></>} />

        <Route path="/kontak" element={<KontakHero/>} />

        <Route path="/" element={<><Hero /><PostArchive /><Cta/></>} />

        <Route path="tambah-post" element={<TambahPost />} />

        <Route path="edit/:id" element={<EditPost />} />

        <Route path="blog/:id" element={<PostSingle />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
