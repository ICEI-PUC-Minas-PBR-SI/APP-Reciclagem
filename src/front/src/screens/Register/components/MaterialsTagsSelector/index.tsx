import React from "react";
import { Text } from "react-native";
import { Container, Tag, TagsContainer } from "./style";
import { Input } from "@/src/components/Input";

interface MaterialsTagSelectorProps {
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
}

const materials = [
  "Plástico",
  "Metal",
  "Papel",
  "Vidro",
  "Baterias",
  "Eletrodomésticos",
  "Tecido",
  "Lixo Eletrônico",
];

function MaterialsTagSelector({
  selectedMaterials,
  setSelectedMaterials,
}: MaterialsTagSelectorProps) {
  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(
        selectedMaterials.filter((item) => item !== material)
      );
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  return (
    <Container>
     <Input.Label>Materiais que Coleta</Input.Label>
      <TagsContainer>
        {materials.map((material) => (
          <Tag
            key={material}
            selected={selectedMaterials.includes(material)}
            onPress={() => toggleMaterial(material)}
          >
            <Text
              style={{ color: "#003f24", width: "100%", textAlign: "center" }}
            >
              {material}
            </Text>
          </Tag>
        ))}
      </TagsContainer>
    </Container>
  );
}

export default MaterialsTagSelector;
