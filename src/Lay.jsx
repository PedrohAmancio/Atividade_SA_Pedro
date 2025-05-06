import React, { Children } from 'react'
import NavBar from './Componentes/NavBar'
const Lay = ({children}) => {
  return (
    <>
   
    <NavBar style={{ width: "400vh", height: "100vh" }}/>
    <div style={{margin : "0", paddingLeft:"0", paddingBottom:"0", paddingRight:"0", width:"100%", height:"100%"}}>
      <div style={{paddingTop : "1000px", margin : "0", paddingLeft:"0", paddingBottom:"0", paddingRight:"0", width:"100pw", height:"100pw"}}>
        {children}
      </div>
    </div>
    </>
  )
}

export default Lay