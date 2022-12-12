import React from 'react'
import Layout from '../components/layouts/layout'
import styled from 'styled-components'
import { TEEL } from '../../styles/colors'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ErrorCode = styled.div`
  font-size: 36px;
  padding: 0 20px;
  border-right: 2px solid ${TEEL};
`

const ErrorMessage = styled.div`
  align-self: center;
  padding: 20px;
`

export default function Component() {
  return (
    <Layout>
      <Container>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>This page could not be found.</ErrorMessage>
      </Container>
    </Layout>
  )

}
