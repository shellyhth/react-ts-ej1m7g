import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from './components/Greeting'
import Photo from './components/Photo'


import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

let name = "Shelly"
let x= 10
let y =20
// function Greeting(){
//   return <h1>hello</h1>
// }
root.render(
<Greeting/>
);
