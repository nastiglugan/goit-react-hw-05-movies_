import { useState } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  SearchBtn,
  SearchInput,
} from './SeachForm.styled';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

export const SeachForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleIputChange = e => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast.error('Ти нічого не ввів в пошук!');
      return;
    }
    onSubmit(name);

    setName('');
  };

  return (
    <SearchbarWrap>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="searchName"
          value={name}
          onChange={handleIputChange}
        />

        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </SearchbarWrap>
  );
};

SeachForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
