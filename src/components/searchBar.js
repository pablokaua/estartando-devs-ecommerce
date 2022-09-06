import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 100%;
  background: #81caa8;
  text-align: center;
`;
const SearchBar = styled.input`
  border-radius: 4px;
  border: none;
  width: 85%;
  height: 30px;
  margin: 10px;
  color: #939393;
  background-image: url(/assets/magnifierIcon.png);
  font-size: 14px;
  background-repeat: no-repeat;
  background-position: 9px 8px;
  padding-left: 30px;
  background-color: #fff;
  box-shadow: none;
  -webkit-appearance: none;
`;

const StyledInput = () => {
  return (
    <SearchBarContainer>
      <SearchBar type="text" placeholder="Digite aqui para buscar um produto" />
    </SearchBarContainer>
  );
};

export default StyledInput;
