import React from 'react';
import Head from 'next/head';
import { Container, Menu, Icon } from 'semantic-ui-react';

const App = ({ children }) =>
  <div id="app">
    <Head>
      <title>Instagram - Building by Nextjs & redux-saga</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />
    </Head>
    <Menu size="massive">
      <Menu.Item>
        <Icon name="instagram" circular />
      </Menu.Item>
    </Menu>
    <Container>
      {children}
    </Container>
  </div>;

export default App;
