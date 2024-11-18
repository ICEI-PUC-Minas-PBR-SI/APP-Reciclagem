import React from "react";
import { Container, Section } from "./style";
import { ListItem } from "./ListItem";

interface LocalsListProps {
  estabelecimentos: {
    id: string;
    name: string;
    neighborhood: string;
    number: number;
    score: number;
    latitude: number;
    longitude: number;
  }[];
  onSelect: (latitude: number, longitude: number) => void;
}

const LocalsList: React.FC<LocalsListProps> = ({
  estabelecimentos,
  onSelect,
}) => {
  return (
    <Container>
      <Section>
        {estabelecimentos.map((local) => (
          <ListItem
            key={local.id}
            title={local.name}
            subtitle={`${local.neighborhood}, ${local.number}`}
            score={local.score == 1 ? true : false}
            onPress={() => onSelect(local.latitude, local.longitude)}
          />
        ))}
      </Section>
    </Container>
  );
};

export default LocalsList;
