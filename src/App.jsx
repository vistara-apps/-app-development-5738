import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import RescuePage from './pages/RescuePage';
import ProposalPage from './pages/ProposalPage';
import KitsPage from './pages/KitsPage';
import ProfilePage from './pages/ProfilePage';
import Navigation from './components/Navigation';
import { UserProvider } from './context/UserContext';
import { PaymentProvider } from './context/PaymentContext';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate user authentication check
    const checkUser = async () => {
      try {
        // In real app, this would check MiniKit authentication
        const savedUser = localStorage.getItem('spark_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking user:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-muted">Loading Spark...</p>
        </div>
      </div>
    );
  }

  return (
    <UserProvider value={{ user, setUser }}>
      <PaymentProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-bg via-surface to-bg">
            <Header />
            <main className="pb-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/rescue" element={<RescuePage />} />
                <Route path="/proposal" element={<ProposalPage />} />
                <Route path="/kits" element={<KitsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Navigation />
          </div>
        </Router>
      </PaymentProvider>
    </UserProvider>
  );
}

export default App;