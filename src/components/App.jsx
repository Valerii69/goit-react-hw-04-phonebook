import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Section, Title, Container } from './App.styled';

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useLocalStorage } from './hooks/useLocalStorage';

export function App() {
  // початковий стан
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addNewContact = data => {
    const isExist = contacts.some(
      ({ number }) =>
        number.toLocaleLowerCase() === data.number.toLocaleLowerCase()
    );
    if (isExist) {
      Notify.info(`${data.number} is already in contacts`);
      return;
    }
    const newContact = { id: nanoid(), ...data };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  //видалення контакта
  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    // const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Section>
          <Form addNewContact={addNewContact} />
        </Section>

        <Title>Contacts</Title>
        <Section>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={getVisibleContacts()}
            deleteContact={deleteContact}
          />
        </Section>
      </Container>
    </>
  );
}
