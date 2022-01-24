import type { NextPage } from 'next'
import Layout from "../components/Layout";
import HomePage from "../components/pages/HomePage";

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
          <HomePage />
      </section>
    </Layout>
  )
}

export default Home
