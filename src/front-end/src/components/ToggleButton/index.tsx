import { Divider, ToggleButton, ToggleContainer } from './style';

export default function ToggleButtonGroup({ active, setActive }: any) {
  return (
    <ToggleContainer>
      <ToggleButton active={active === 'CLIENT'} onClick={() => setActive('CLIENT')}>
        Reciclador
      </ToggleButton>
      <Divider />
      <ToggleButton active={active === 'COLLECTOR'} onClick={() => setActive('COLLECTOR')}>
        Coletor
      </ToggleButton>
    </ToggleContainer>
  );
}
