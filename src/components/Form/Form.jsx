import React, { Component } from 'react';
import { Label, Input, Button, Container } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  //перезапис state ввденних значень imput
  handleImputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  //обробник button
  handleSubmit = event => {
    event.preventDefault();
    const { addNewContact } = this.props;
    //додавання нового контакта
    addNewContact({ ...this.state });
    this.reset();
  };
  //очистка state
  reset = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    const patternNumber =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const patternName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

    return (
      <Container onSubmit={this.handleSubmit}>
        <div>
          <Label>
            Name
            <Input
              onChange={this.handleImputChange}
              type="text"
              name="name"
              value={name}
              autocomplete="on"
              placeholder="Enter name"
              pattern={patternName}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              onChange={this.handleImputChange}
              type="tel"
              name="number"
              value={number}
              autocomplete="on"
              placeholder="Enter number 000-00-00"
              pattern={patternNumber}
              // maxlength="12"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </div>
        <Button disabled={!name || !number}>Add new contact</Button>
      </Container>
    );
  }
}

export default Form;
