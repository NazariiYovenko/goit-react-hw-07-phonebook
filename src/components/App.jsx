import { Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewContact,
  deleteIdContact,
  filterContact,
} from 'redux/ContactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const onAddContact = newContact => {
    if (
      contacts.find(
        ({ name }) =>
          name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
      )
    ) {
      window.alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addNewContact(newContact));
  };

  const onDeleateContact = id => {
    dispatch(deleteIdContact(id));
  };

  const getFiltredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

  const onChangeFilterValue = event =>
    dispatch(filterContact(event.currentTarget.value));

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={onAddContact} />

      <Title>Contacts</Title>
      <Filter filterValue={filter} onChangeFilterValue={onChangeFilterValue} />
      <ContactList
        contacts={getFiltredContacts()}
        onDeleateContact={onDeleateContact}
      />
    </Section>
  );
};

export default App;
