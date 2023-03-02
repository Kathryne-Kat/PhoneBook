import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/Contact/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapAll}>
      <div className={css.container}>
        <div className={css.wrap}>
          <div>
            <ContactForm />
          </div>
          <div>
            <h2 className={css.titleH2}>Contacts</h2>
            {contacts.length > 0 ? (
              <div className={css.filterCont}>
                <Filter />
                <ContactList />
              </div>
            ) : (
              <p className={css.comment}>No contacts</p>
            )}
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}
