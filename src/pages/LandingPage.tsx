
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import MasterySection from '../components/MasterySection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  function onSignIn(): void {
    navigate('/login');
  }

  function onStart(): void {
    navigate('/register');
  }

  return (
    <div className="bg-white overflow-hidden">
      <NavBar onSignIn={onSignIn} onStart={onStart} />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <MasterySection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};


export default LandingPage;
