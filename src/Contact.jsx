import React from 'react';
import { Form, Button,} from 'semantic-ui-react';
import { MapContainer } from './MapContainer';



const Contact = () => {
 
    return (
        <div className="ui main container">
          <div className="ui stackable two column grid">

            <div className="column">

            <Form name="contact_me" inverted success data-netlify="true" >
              <input type="hidden" name="contact_me" value="contact" />
                <Form.Group widths='equal'>

                <Form.Input name='name' placeholder='Your Name'></Form.Input>
                <Form.Input name='email' placeholder='Email'></Form.Input>
                </Form.Group>
                <Form.Input name='subject' placeholder='Subject'></Form.Input>
                <Form.Field name='message' placeholder="Your message" control="textarea" rows="10" />
                <Button type='submit'>Send</Button>
              </Form>   
            </div>

            
            <div className="column">

            <p> Map will be here.</p>

            </div>
          </div>
        </div>
      );
};

export default Contact