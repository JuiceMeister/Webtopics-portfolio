import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";

import { Button } from './stories/Button.jsx'
import { Header } from './components/Header'

function App() {
const buttonProps = {
  backgroundColor: "red",
  primary: true,
  label: "test button",
  size: "large"

}
  return (
    <>
    <Header></Header>
    <Button backgroundColor={"red"} primary={true} label={"test"}></Button>
    </>
  );
}

export default App;
