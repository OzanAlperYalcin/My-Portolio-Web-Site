import React from 'react'

function Title({children}) {
  return (
    <h1 className='text-lg lg:text-2xl font-bold px-3 pt-10 pb-3'>{children}</h1>
  )
}

export default Title