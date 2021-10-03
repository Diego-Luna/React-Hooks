import React from 'react';
import { Helmet } from 'react-helmet';

import Products from '../components/Products';
import initialState from '../initialState';

function Home() {
  return (
    <>
      <Helmet>
        <title>MoonMakers Conf Merch - Productos</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MoonMakers" />
        <meta name="twitter:creator" content="@MoonMakers" />
        <meta name="twitter:title" content="MoonMakers Conf Merch" />
        <meta name="twitter:description" content="MoonMakers Conf Merch" />
        <meta
          name="twitter:image"
          content="https://i.pinimg.com/236x/e2/5e/4e/e25e4e4a848f569fa69554b896cc9543.jpg"
        />
        <meta property="og:title" content="MoonMakers Conf Merch" />
        <meta property="og:description" content="MoonMakers Conf Merch" />
        <meta
          property="og:image"
          content="https://i.pinimg.com/236x/e2/5e/4e/e25e4e4a848f569fa69554b896cc9543.jpg"
        />
        <meta property="og:url" content="moonmakers.org" />
        <meta property="og:site_name" content="MoonMakers Conf Merch" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
}

export default Home;
