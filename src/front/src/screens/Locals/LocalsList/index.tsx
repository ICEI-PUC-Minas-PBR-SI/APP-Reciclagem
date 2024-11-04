import React, { useEffect, useState } from "react";

import Button from "@/src/components/Button";
import { Container, Section } from "./style";
import { getEstabelecimentos } from "@/src/services/api";
import { ListItem } from "./ListItem";

interface Estabelecimentos {
  id: string;
  name: string;
  neighborhood: string;
  number: number;
  score: number;
}

const LocalsList = () => {
  const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimentos[]>(
    []
  );

  const getEstabelecimentosRequest = async () => {
    try {
      const response = await getEstabelecimentos();

      console.log("response:", response);
      setEstabelecimentos(response);
    } catch (err) {
      console.log(err);
      // setError("Houve um problema com o login, verifique suas credenciais!");
    }
  };

  useEffect(() => {
    getEstabelecimentosRequest();
  }, []);

  return (
    <Container>
      <Section>
        {estabelecimentos.map((local) => (
          <ListItem
            key={local.id}
            title={local.name}
            subtitle={`${local.neighborhood}, ${local.number},`}
            score={local.score == 1 ? true : false}
          />
        ))}
      </Section>
    </Container>
  );
};

export default LocalsList;
