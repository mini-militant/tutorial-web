import React from 'react'
import * as imgUrl from './imgUrl'
import '../../styles/style.css'

const FrontPage=()=>{
  return(
    <div className="container">
      <img  class ="img-front-background"
       src={imgUrl.background_img}
      alt="backgroundImg"
      />
    </div>
  )
}


export default FrontPage