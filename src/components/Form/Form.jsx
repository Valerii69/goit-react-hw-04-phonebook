import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Label, Input, Button, Container } from './Form.styled';

export default Form;

function Form({ addNewContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //перезапис state ввденних значень imput
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  //обробник button
  const handleSubmit = event => {
    event.preventDefault();
    // const { addNewContact } = this.props;
    //додавання нового контакта
    addNewContact({ name, number });
    setName('');
    setNumber('');
  };
  //очистка state
  // reset = () => this.setState({ name: '', number: '' });

  // render() {
  //   const { name, number } = this.state;
  const patternNumber =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  const patternName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <Label>
          Name
          <Input
            onChange={handleChange}
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
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            autocomplete="on"
            placeholder="Enter number 000-00-00"
            pattern={patternNumber}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </div>
      <Button disabled={!name || !number}>Add new contact</Button>
    </Container>
  );
}
