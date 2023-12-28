import React from 'react'

const List = ({href,text,className}) => {
  return (
   <li><a href={href} className={`${className}: font-poppin text-2xl font-semibold`}>{text}</a></li>
  )
}

export default List