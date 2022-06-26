import React from 'react';

import './App.css';
// import { ChakraProvider } from '@chakra-ui/react'
import Showauthpage from './Loginauth/Showauthpage';
import Github from './paginationgithub/Github';
import Cleanup from './usestate/Cleanup';
import Intro from './Chakraui/Intro';
import Showcontext from './contextapi/Showcontext';
// import Show from './todo/Show';
// import Uplift from './uplifting(usestate)/Uplift';

import Allroutes from "./Authassignment/Allroutes"
import RestroRoutes from './Restaurent_full/RestroRoutes';
 import Showevaluation from "./evalutaion1/components/Showevaluation"
import Details from './formpractice/Details';
import Showtodo from './Todounit5/Showtodo';


function App() {
// const [theme,togg]
  return (
    
    // <ThemeContext.Provider>
   <div className="App"> 
  
{/* todo>>>>>>>>>>>>>> */}
  {/* <Show></Show> */}
{/* <Github></Github> */}
{/* <Showevaluation></Showevaluation> */}
{/* <Uplift></Uplift> */}
{/* <Showauthpage></Showauthpage> */}
{/* <Cleanup></Cleanup> */}
   {/* <Restro></Restro> */}
   {/* <Intro></Intro> */}
{/* <Showcontext></Showcontext> */}
{/* <Allroutes></Allroutes> */}
{/* <RestroRouteses> </RestroRouteses> */}
{/* <Details></Details> */}
   <Showtodo></Showtodo>
    </div>
  
  );
}





  
 




export default App;
