import React from 'react';
import Pages from "./pages/pages"
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <AppContainer>
        <Search />
    </AppContainer>
      <Category />
      <Pages />
    </BrowserRouter>
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default App;
