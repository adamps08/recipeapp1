import React from 'react';
import Pages from "./pages/pages"
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi"
import './index.css';  // Assuming you have a main CSS file where you import the Google Font


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"}>Delicious</Logo>
    </Nav>
     <AppContainer>
        <Search />
    </AppContainer>
      <Category />
      <Pages />
    </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;

svg{
  font-size: 2rem;
}
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default App;
