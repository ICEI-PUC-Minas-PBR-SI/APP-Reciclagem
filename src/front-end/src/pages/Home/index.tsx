import { useState } from 'react';
import ButtonGroup from './components/ButtonsGroup';
import MaterialList from './components/MaterialList';
import { HomeContainer, Section, SectionsContaine, SectionTitle } from './style';
import Header from '../../components/Header';
import Button from '../../components/Button/Button';

function Home() {
  const [resultados, setResultados] = useState([]);

  const recyclableItems = [
    { name: 'Papelão', type: 'Reciclável', image: 'https://placehold.co/60' },
    { name: 'Plástico', type: 'Reciclável', image: 'https://placehold.co/60' },
    { name: 'Vidro', type: 'Reciclável', image: 'https://placehold.co/60' },
    { name: 'Metal', type: 'Reciclável', image: 'https://placehold.co/60' },
  ];

  const wasteItems = [
    { name: 'Óleo de Carro', type: 'Resíduo', image: 'https://placehold.co/60' },
    { name: 'Pilha', type: 'Resíduo', image: 'https://placehold.co/60' },
  ];

  const handleSearch = (local) => {};
  return (
    <>
      <Header />

      <HomeContainer>
        {/* <Search onSearch={handleSearch} /> */}

        <ButtonGroup />
        <SectionsContaine>
          <Section>
            <SectionTitle>♻️ Materiais Recicláveis</SectionTitle>
            <MaterialList items={recyclableItems} />
            <Button primary>Todos os Recicláveis</Button>
          </Section>
          <Section>
            <SectionTitle>🗑️ Resíduos</SectionTitle>
            <MaterialList items={wasteItems} />
            <Button primary>Todos os Resíduos</Button>
          </Section>
        </SectionsContaine>
      </HomeContainer>
    </>
  );
}

export default Home;
