import { useState } from 'react';
import {
  ToggleCircle,
  Toggle,
  ToggleFieldComponent,
  ToggleContainer,
  ToggleContent,
} from './style';
import { TbMoodAnnoyed, TbMoodSmileBeam } from 'react-icons/tb';
import { Label } from '../Label';

interface ToggleProps {
  onToggle: (active: boolean) => void;
  label: string;
}

function ToggleInput({ onToggle, label }: ToggleProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    onToggle(newActiveState);
  };

  return (
    <ToggleFieldComponent>
      <Label>{label}</Label>
      <ToggleContainer>
        <Toggle isActive={isActive} onClick={handleToggle}>
          <ToggleCircle isActive={isActive}>
            {isActive ? <TbMoodSmileBeam size={18} /> : <TbMoodAnnoyed size={18} />}
          </ToggleCircle>
        </Toggle>
        <ToggleContent>
          Registre os itens entregues e garanta que os nossos usuários ganhem pontos por cada
          material reciclado!
        </ToggleContent>
      </ToggleContainer>
    </ToggleFieldComponent>
  );
}

export default ToggleInput;
