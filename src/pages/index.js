import React from 'react'
import Resiliency from './resiliency'
import Robocalls from './robocalls'

import '../../styles/index.css'

export default function Component() {
  return (
    <>
      {process.env.GATSBY_PAGE === 'RESILIENCY' ? (
        <Resiliency />
      ) : (
        <Robocalls />
      )}
    </>
  )
}
