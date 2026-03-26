/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import AddTerm from './pages/AddTerm';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Trending from './pages/Trending';
import TermDetail from './pages/TermDetail';
import SavedTerms from './pages/SavedTerms';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="trending" element={<Trending />} />
            <Route path="explore" element={<Explore />} />
            <Route path="saved" element={<SavedTerms />} />
            <Route path="term/:id" element={<TermDetail />} />
            <Route path="add" element={<AddTerm />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            {/* Fallback for other routes to Home for demo purposes */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
