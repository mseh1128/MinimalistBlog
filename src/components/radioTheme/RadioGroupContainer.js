/* eslint-disable max-len */

import React from 'react'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'
import RadioGroup from './RadioGroup'

const StyledContainer = styled(Container)`
    &&& {
      position: fixed;
      top: 0%;
      left: 80%;
        width: 100%;
        margin-top: 6.75rem;
        justify-self: center;
    }
`

const RadioGroupContainer = ({ closeRadioComponent }) => (
  <StyledContainer>
    <RadioGroup closeSelf={closeRadioComponent} />
  </StyledContainer>
)

export default RadioGroupContainer
