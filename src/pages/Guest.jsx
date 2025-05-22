import React from 'react';
import GuestLayout from '../layouts/GuestLayout';
import About from '../components/About';
import ProdukList from '../components/ProdukList';
import TestimoniList from '../components/TestimoniList';
import Hero from '../components/Hero';


const Guest = () => {
  return (
    <GuestLayout>
      <Hero />
      <About />
      <ProdukList />
      <TestimoniList />
    </GuestLayout>
  );
};

export default Guest;

