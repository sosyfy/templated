import Head from 'next/head'
import Hero1 from './../components/hero/Hero1';
import About1 from './../components/about/About1';


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>hello guys</title>
      </Head>
      <main>
          <Hero1/>
          <About1/>
      </main>
    </div>
  )
}

export default Home
