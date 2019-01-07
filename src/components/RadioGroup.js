import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Radio } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Consumer } from '../context'

const FormStyled = styled(Form)`
  &&& {
      
      width: 12rem;
    padding: 1rem 0 1rem 1rem;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
`

const StyledTimesIcon = styled(FontAwesomeIcon)`
  opacity: 0.5;
  margin-left: 1.5rem;
  &:hover {
    opacity: 1.0;
  }
`

class RadioGroup extends Component {
  state = { value: 'Red' }
  handleChange = (dispatch, e, { value }) => {
    this.setState({ value })
    dispatch({
      type: 'CHANGE_THEME_PRIMARY',
      payload: {
        primary: value
      }
    })
  }

  render () {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <FormStyled>
              <Form.Field>
                Choose a theme: <StyledTimesIcon icon="times" onClick={() => this.props.closeSelf()} />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Green'
                  name='radioGroup'
                  value='Green'
                  checked={this.state.value === 'Green'}
                  onChange={this.handleChange.bind(this, dispatch)}
                />
              </Form.Field>
              <Form.Field >
                <Radio
                  label='Blue'
                  name='radioGroup'
                  value='Blue'
                  checked={this.state.value === 'Blue'}
                  onChange={this.handleChange.bind(this, dispatch)}

                />
              </Form.Field><Form.Field >
                <Radio
                  label='Red'
                  name='radioGroup'
                  value='Red'
                  checked={this.state.value === 'Red'}
                  onChange={this.handleChange.bind(this, dispatch)}

                />
              </Form.Field>
            </FormStyled>
          )
        }}
      </Consumer >
    )
  }
}

export default RadioGroup
