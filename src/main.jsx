import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';
import GalleryView from './routes/GalleryView.jsx';
import CreateView from './routes/CreateView.jsx';
import Edit from './components/Edit.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/crew/:id" element={<DetailView />} />
          <Route index={false} path="/gallery" element={<GalleryView />} />
          <Route index={false} path="/create" element={<CreateView />} />
          <Route index={false} path="/crew/:id/edit" element={<Edit />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
                <Link to="/">
                  Back to Home
                </Link>
              </main>
            }
          />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)