import React, { useState } from 'react';
import Modal from '../src/components/Modal';
import Layout from '../src/layout/Layout';
import Contact from '../src/sections/Contact';
import HeroSection from '../src/sections/HeroSection';
import Recommendations from '../src/sections/Recommendations';
import Search from '../src/sections/Search';

const Home = () => {

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <Layout handleModal={handleModal}>
      <HeroSection handleModal={handleModal} />
      <Search handleModal={handleModal} />
      <Recommendations handleModal={handleModal} />
      <Contact handleModal={handleModal} />
      <Modal modal={modal} setModal={setModal} handleModal={handleModal} />
    </Layout>
  );
}

export default Home;
