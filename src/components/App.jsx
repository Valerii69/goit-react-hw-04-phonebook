import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Section, Title, Container } from './App.styled';

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export class App extends Component {
  // початковий стан
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //монтування Component
  componentDidMount() {
    const dataComponent = JSON.parse(localStorage.getItem('contacts'));
    console.log(dataComponent);

    if (dataComponent) {
      this.setState({ contacts: dataComponent });
    }
  }
  //оновлення Component
  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      // console.log('Обновилось поле contacts ');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // створення нового контакта
  addNewContact = data => {
    const { contacts } = this.state;
    if (
      contacts.some(
        ({ number }) =>
          number.toLocaleLowerCase() === data.number.toLocaleLowerCase()
      )
    )
      return Notify.info(`${data.number} is already in contacts`);
    else
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

    const newContact = { id: nanoid(), ...data };
  };
  //видалення контакта
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Container>
          <Title>Phonebook</Title>
          <Section>
            <Form addNewContact={this.addNewContact} />
          </Section>

          <Title>Contacts</Title>
          <Section>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactsList
              contacts={visibleContacts}
              deleteContact={this.deleteContact}
            />
          </Section>
        </Container>
      </>
    );
  }
}
