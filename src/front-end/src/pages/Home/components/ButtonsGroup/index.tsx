import { ButtonsGroupContainer, Card, CircleIcon, IconWrapper, Title } from './styled';

interface ButtonProps {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}

const RecyclingIcon = () => (
  <span role="img" aria-label="recycling">
    ♻️
  </span>
);
const FactoryIcon = () => (
  <span role="img" aria-label="factory">
    🏭
  </span>
);
const HistoryIcon = () => (
  <span role="img" aria-label="history">
    📋
  </span>
);

function ButtonCard({ title, icon, active = false, disabled = false }: ButtonProps) {
  return (
    <Card active={active} disabled={disabled}>
      <CircleIcon active={active}>
        <IconWrapper>{icon}</IconWrapper>
      </CircleIcon>

      <Title active={active}>{title}</Title>
    </Card>
  );
}

function ButtonGroup() {
  return (
    <ButtonsGroupContainer>
      <ButtonCard title="Materiais" icon={<RecyclingIcon />} active />
      <ButtonCard title="Locais de Coleta" icon={<FactoryIcon />} disabled />
      <ButtonCard title="Histórico de Pontos" icon={<HistoryIcon />} disabled />
    </ButtonsGroupContainer>
  );
}

export default ButtonGroup;
