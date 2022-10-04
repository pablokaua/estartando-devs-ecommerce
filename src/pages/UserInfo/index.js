import React from 'react';
import { AddressForm } from '../../components/AddressForm';
import { Button } from '../../components/Button';

export const UserInfo = () => {
  return (
    <form>
      <AddressForm name="name" placeholder="Nome" />
      <AddressForm name="surname" placeholder="Sobrenome" />
      <AddressForm name="cpf" placeholder="CPF" />
      <AddressForm name="birthday" placeholder="Data de Nascimento" />
      <AddressForm name="phone" placeholder="Telefone" />
      <AddressForm name="email" placeholder="E-mail" />
      <AddressForm name="confirmEmail" placeholder="Confirmar e-mail" />
      <Button description="Prosseguir" />
    </form>
  );
};
