import React from 'react';
import { Form, Button,} from 'semantic-ui-react';

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
          <h1> Contact me</h1>
          <p>  I'm interested in freelance opportunities, especially for ambitious large projects.
          However, if you have other requests or questions,
            don't hesitate to contact me using the form.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact