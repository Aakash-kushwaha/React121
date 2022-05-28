import React from 'react';
import Addcontact from './Addcontact';
import ContactCard from './ContactCard';

;


 
let Inistate =[
  {
    id:1,
    firstName:"john",
    lastName:"singh",
    phone: 90234784
  },
  {
    id:2,
    firstName:"chris",
    lastName:"kumar",
    phone:234923
  }
]

function Show() {

  let [Contact,setContact] = React.useState(Inistate)

  const Chalbhai=(text,phone)=>{
    setContact([
      ...Contact ,
      {
        id: Contact.length+1,
        firstName :text,
        phone:phone
  
  
      }
    ])
  }

console.log(Contact)

const ondelete=(id)=>{
  console.log(id,"key")
   setContact(Contact.filter((item)=>item.id!==id))
}
  return (
    <div className="App">

    <Addcontact Chalbhai={Chalbhai}></Addcontact>


       {Contact.map((item)=>(

         
         <ContactCard id={item.id} key={item.id} name={item.firstName} ondelete={ondelete}></ContactCard>
         
       ))}
    </div>
  );
}





  
 




export default Show;
