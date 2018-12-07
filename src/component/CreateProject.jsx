import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

import '../style/login.sass';
import appContaints from '../util/appContaints';
import Alert from './alert';

const { DEADLINK } = appContaints;

class CreateProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit() {

  }

  render() {
    return (
      <div className="loginFormPage">
        <div className="container">
          <div className="row">
            <Form onSubmit={this.handleLoginSubmit} className="col s6 offset-s3 loginForm">
              <h1>Register</h1>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input
                  placeholder="Title"
                  id="title"
                  type="text"
                  className="validate"
                  onChange={(e) => this.setState({
                    title: e.currentTarget.value,
                  })}
                  />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="body">Body</Label>
                <FroalaEditor
                  id="body"
                  className="validate"
                  tag="textarea"
                  onModelChange={(model) => this.setState({
                    body: model,
                  })}
                  />
              </FormGroup>
              <div className="btnWrapper">
                <button
                  href={DEADLINK}
                  className="btn btn-secondary"
                  >
                  Save
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProjectComponent;
