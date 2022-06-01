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


function App() {
// const [theme,togg]
  return (
    
    // <ThemeContext.Provider>
   <div className="App"> 
  
{/* todo>>>>>>>>>>>>>> */}
  {/* <Show></Show> */}
{/* <Github></Github> */}

{/* <Uplift></Uplift> */}
{/* <Showauthpage></Showauthpage> */}
{/* <Cleanup></Cleanup> */}
   {/* <Restro></Restro> */}
   {/* <Intro></Intro> */}
{/* <Showcontext></Showcontext> */}
{/* <Allroutes></Allroutes> */}
<RestroRoutes> </RestroRoutes>

    </div>
  
  );
}





  
 




export default App;
