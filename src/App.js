import React, { useState } from 'react'

const App =() =>{

  let time = new Date().toLocaleTimeString();

  const[cTime , setcTime] = useState(time);

  const Utime = () =>{
    setcTime(new Date().toLocaleTimeString());
  };

  setInterval(Utime,1000);
  return(
    <>
      <h1>{cTime}</h1>
    
    </>
  );
};

export default App;