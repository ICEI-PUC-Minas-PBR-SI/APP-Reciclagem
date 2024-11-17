import React, { useEffect, useState } from "react";

import { ListItem } from "./ListItem";
import Button from "@/src/components/Button";
import DividerHorizontal from "@/src/components/Divider";
import { Container, Section, SectionTitle } from "./style";
import { getMaterials } from "@/src/services/api";

interface Material {
  id: string;
  name: string;
  subtitle: string;
  imageSource: string;
  type: string;
}

const MaterialsList = () => {
  const [recyclables, setRecyclables] = useState<Material[]>([]);
  const [waste, setWaste] = useState<Material[]>([]);

  const getMaterialRequest = async () => {
    try {
      const response = await getMaterials();

      const recyclablesData = response.filter(
        (item: any) => item.type === "Rciclavel"
      );
      const wasteData = response.filter((item: any) => item.type === "Resisuo");
      setRecyclables(recyclablesData);
      setWaste(wasteData);
    } catch (err) {
      console.log(err);
      // setError("Houve um problema com o login, verifique suas credenciais!");
    }
  };

  useEffect(() => {
    getMaterialRequest();
  }, []);

  return (
    <Container>
      <Section>
        <SectionTitle>♻️ Materiais Recicláveis</SectionTitle>
        {recyclables.map((item) => (
          <ListItem
            key={`keyItem-${item.id}`}
            title={item.name}
            imageSource={item.imageSource}
            type="RECICLÁVEL"
          />
        ))}
        {/* <Button
          title="Todos os materiais recicláveis"
          theme="primary"
          onPress={() => console.log("Ver todos")}
        /> */}
      </Section>
      <DividerHorizontal />
      <Section>
        <SectionTitle>🗑️ Resíduos</SectionTitle>
        {waste.map((item) => (
          <ListItem
            key={item.id}
            title={item.name}
            imageSource={item.imageSource}
            type="RESÍDUO"
          />
        ))}
        {/* <Button
          title="Todos os Resíduos"
          theme="primary"
          onPress={() => console.log("Ver todos")}
        /> */}
      </Section>
    </Container>
  );
};

export default MaterialsList;
