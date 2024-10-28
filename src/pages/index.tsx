<<<<<<< HEAD
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "components/Navbar";
import LandingPage from "./landingpage";
import HeroSectionV2 from "components/HeroSectionV2";
=======
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import LandingPage from './landingpage'
>>>>>>> f0d57282db67efb87784feb57567225d23b1e3da

export default function Home() {
  return (
    <>
      <Head>
        <title>BCard Community</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Support your community with every swipe!"
        />
      </Head>

      <Navbar />
      <HeroSectionV2 />
      {/* <LandingPage /> */}
    </>
  );
=======
        <meta name='description' content='Support your community with every swipe!' />
      </Head>
       
      <Navbar />
      <LandingPage />
    </>
  )
>>>>>>> f0d57282db67efb87784feb57567225d23b1e3da
}
