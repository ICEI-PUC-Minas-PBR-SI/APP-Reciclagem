import React, { useState } from 'react';
import { DivSearchContainer, DivResultsContainer } from './style';
import InputField from '../../../../components/Input/Input';

interface Props {
  onSearch: any;
}

const Search = ({ onSearch }: Props) => {
  const [local, setLocal] = useState('');

  const handleSearch = () => {
    if (local.trim() !== '') {
      onSearch(local);
    }
  };

  return (
    <DivSearchContainer>
      <InputField
        type="text"
        placeholder="Buscar por material"
        // value={local}
        // onChange={(e: any) => setLocal(e.target.value)}
      />
    </DivSearchContainer>
  );
};

export default Search;
