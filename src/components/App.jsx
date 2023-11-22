import { Section, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilter,
  selectLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import {
  addContactsThunk,
  deleteContactByIdThunk,
  getContactsThunk,
} from 'redux/contacts.thunk';
import Loader from './Loader/Loader';
import { Filter } from './Filter/Filter';
import { filterContacts } from 'redux/filterSlice';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const onAddContact = newContact => dispatch(addContactsThunk(newContact));

  const onDeleateContact = id => dispatch(deleteContactByIdThunk(id));

  const onChangeFilterValue = event =>
    dispatch(filterContacts(event.target.value));

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={onAddContact} />

      <Title>Contacts</Title>
      <Filter filterValue={filter} onChangeFilterValue={onChangeFilterValue} />
      {!isLoading && !error && (
        <ContactList
          contacts={visibleContacts}
          onDeleateContact={onDeleateContact}
        />
      )}
      {isLoading && <Loader />}
      {error && <p>Something went wrong ...</p>}
    </Section>
  );
};

export default App;
