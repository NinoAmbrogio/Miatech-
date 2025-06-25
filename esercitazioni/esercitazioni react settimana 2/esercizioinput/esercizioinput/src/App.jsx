import { useState } from "react";
import React from "react";
import LoginForm from "../Components/LoginForm";
import UncontrolledInput from "../Components/UncontrolletInput";
import ItemList from "../Components/ItemList";
import Card from "../Components/Card";

const items =['item1', 'item2', 'item3'];
const nomi =['pippo', 'franco', 'topolino']

const App = () => {
  return (
    <>
      <LoginForm />
      <UncontrolledInput />
      <ItemList array={items}  />
      <ItemList array={nomi}/>
      <Card>
        <h3>Titolo card</h3>
        <p>ciao</p>
      </Card>
      <Card>
        <h2>titolo card</h2>
        <p>ciao</p>
        <ItemList array={items}/>
      </Card>

      
    </>
  );
};

export default App;
