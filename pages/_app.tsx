import type { AppProps } from 'next/app'

import '../sass/app.css';

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}
export default MyApp
