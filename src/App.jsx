import './index.css';
import BlogGrid from './components/BlogGrid.jsx'
import Navbar from './components/Navbar.jsx';
import BlogPage from './components/BlogPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogGrid />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}