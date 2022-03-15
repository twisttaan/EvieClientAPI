import type { NextPage } from "next";
import { useState } from "react";
import EvieHero from "../components/EvieHero";
import Footer from "../components/Footer";
import Nav from "../components/nav";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav />
      <EvieHero />
      <Footer />
    </>
  );
};

export default Home;
