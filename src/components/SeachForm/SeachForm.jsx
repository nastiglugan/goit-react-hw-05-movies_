import { useState } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  SearchBtn,
  SearchInput,
} from './SeachForm.styled';
import toast from 'react-hot-toast';

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
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={name}
          onChange={handleIputChange}
        />

        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </SearchbarWrap>
  );
};
