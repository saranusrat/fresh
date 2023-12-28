import React from 'react'

const Button = ({className,text}) => {
  return (
   <button className={`${className}: font-poppin text-2xl`}>{text}</button>
  )
}

export default Button