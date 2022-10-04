import React from 'react';
import { SearchBar, SearchBarContainer } from './styles';

const StyledInput = () => {
  return (
    <SearchBarContainer>
      <SearchBar type="text" placeholder="Digite aqui para buscar um produto" />
    </SearchBarContainer>
  );
};

export default StyledInput;
