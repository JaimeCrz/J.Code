import React from 'react'
import { Form, Input, TextArea, Button,} from 'semantic-ui-react'
 


const Contact = () => {
    return (
        <div className="ui main container">
          <div class="ui stackable two column grid">

            <div class="column">

            <Form inverted data-netlify="true" >
                <Form.Group widths='equal'>
                  <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Name'
                    placeholder='Name'
                  />
                </Form.Group>
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Message'
                  placeholder='Message'
                />
                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Email'
                  placeholder='email@mail.com'
                  error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                  }}
                />
                <Form.Field
                  id='form-button-control-public'
                  control={Button}
                  content='Confirm'
                />
              </Form>   
                 
            </div>

            <div class="column">
              <h1 class="ui white inverted header">Contact me</h1>
              <p>
              Comimng contact me form
              </p>
            </div>

          </div>
        </div>
      );
};

export default Contact;