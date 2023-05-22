import React from 'react'

function Demo() {
    const arr=["Mayuresh"," ","   ","amgre"]
    let n=arr.join('')
    console.log(n.replace(/[' " ]/ig," "))
  return (
   
    <div>
        
    </div>
  )
}

export default Demo