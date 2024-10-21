import { Container, Label, Tag, TagsContainer } from './style';

interface MaterialsTagSelectorProps {
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
}

const materials = [
  'Plástico',
  'Metal',
  'Papel',
  'Vidro',
  'Baterias',
  'Eletrodomésticos',
  'Tecido',
  'Lixo Eletrônico',
];

function MaterialsTagSelector({
  selectedMaterials,
  setSelectedMaterials,
}: MaterialsTagSelectorProps) {
  //
  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== material));
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  return (
    <Container>
      <Label>Materias que Coleta</Label>
      <TagsContainer>
        {materials.map((material) => (
          <Tag
            key={material}
            selected={selectedMaterials.includes(material)}
            onClick={() => toggleMaterial(material)}
          >
            {material}
          </Tag>
        ))}
      </TagsContainer>
    </Container>
  );
}

export default MaterialsTagSelector;
