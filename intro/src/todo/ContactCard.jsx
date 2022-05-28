import React from 'react';



   const ContactCard=({name,id ,ondelete})=>{




     return( 
     <div  style={{marginBottom:"1rem",border:"1px solid teal"}}>{name} 
      <button onClick={()=>ondelete(id)}>delete</button>

      </div>
    
     )
   }

  
 




export default ContactCard;
