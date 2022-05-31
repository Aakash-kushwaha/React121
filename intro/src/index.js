import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Contextapiprovider from "./contextapi/Contextapiprovider"
import { Authprovider } from './Authassignment/Authprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
// // without jsx
// const Elem = React.createElement ("button",{onClick:()=>alert("without jsx")},"click me");

// const withjsx = React.createElement("button",{onClick:()=>alert("withjsx")},"click me")

// function Button(prop){
//   return (<button onClick={()=>alert("with  prop")}>{prop.title}</button>)
// }

// const myapp = React.createElement("div",{},
//    [Elem,withjsx,
//     Button({title:"Hello1"}),
//     Button({title:"Hello2"}),
//     Button({title:"Hello3"}),
//     <Button title="jsx"/>
//   ])

root.render(
<Authprovider>
    <BrowserRouter>
<App></App>
</BrowserRouter>
</Authprovider>
// { <Contextapiprovider> }
// </Contextapiprovider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
