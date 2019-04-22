import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from 'views/App/Sidebar/Sidebar';
import Header from 'views/App/Header/Header';
import Footer from 'views/App/Footer/Footer';
import theme from './theme';
import Routes from './Routes/Routes';

const Wrapper = styled.div`
  display: flex;

  button + button {
    margin-left: 20px;
  }
`;

const MainSection = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;


const titles = [
  {
    title: 'Blog Dashboard',
    icon: 'edit',
  },
  {
    title: 'Blog Posts',
    icon: 'vertical_split',
  },
  {
    title: 'Add New Post',
    icon: 'note_add',
  },
  {
    title: 'Forms & Components',
    icon: 'view_module',
  },
  {
    title: 'Tables',
    icon: 'table_chart',
  },
  {
    title: 'User Profile',
    icon: 'person',
  },
  {
    title: 'Errors',
    icon: 'error',
    route: '/error',
  },
];

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Sidebar titles={titles} />
        <MainSection>
          <Header notifications={12} />
          <Routes />
          <Footer />
        </MainSection>
      </Wrapper>
    </ThemeProvider>
  </div>
);

export default App;
