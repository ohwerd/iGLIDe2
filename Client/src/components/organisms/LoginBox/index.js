import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const LoginBox = ({ ...props }) => {
  return (
    <div {...props}>
      <StyledHeading>Log into your account</StyledHeading>
      <input type="text"/>
      <input type="password"/>
      <input id="ShowPassword" type="checkbox"/>
      <label for="ShowPassword">Show</label>
       <input id="ShowPassword" type="checkbox"/>
      <label for="ShowPassword">Remember me</label>
      <button>Login</button>
     {/* <TextInput></TextInput>
      <PasswordInput></PasswordInput>
      <Checkbox></Checkbox>
      <Button></Button>*/}
    </div>
  )
}

export default LoginBox
