import Head from 'next/head'
import Container from './../components/Container';
import Hero1 from './../components/hero/Hero1';


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>hello guys</title>
      </Head>
      <main>
       {/* <Container> */}
          <Hero1/>
       {/* </Container> */}
      </main>
    </div>
  )
}

export default Home
