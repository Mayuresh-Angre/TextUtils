import React from 'react'

function Alert({ alert }) {
    const captilized=(word)=>{
        let newWord=word.toLowerCase()
        return newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
    console.log(alert)
    return (
        alert && <div>
            <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{captilized(alert.type)}: {alert.message} </strong>
             
            </div>
        </div>
    )
}

export default Alert