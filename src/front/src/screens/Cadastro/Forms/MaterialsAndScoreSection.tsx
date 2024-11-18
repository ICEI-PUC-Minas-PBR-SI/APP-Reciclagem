import React from "react";
import { Text } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import MaterialsTagSelector from "../../Register/components/MaterialsTagsSelector";
import ToggleScore from "../../Register/components/ToggleScore";

interface FormData {
  establishment: {
    product: string[];
    score: boolean;
  };
}

const MaterialsAndScoreSection = () => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();

  const selectedMaterials = watch("establishment.product") || [];
  const scoreValue = watch("establishment.score") || false;

  return (
    <>
      <Controller
        name="establishment.product"
        control={control}
        render={({ field: { onChange } }) => (
          <MaterialsTagSelector
            selectedMaterials={selectedMaterials}
            setSelectedMaterials={(materials) => {
              clearErrors("establishment.product");
              onChange(materials);
            }}
          />
        )}
      />

      {errors?.establishment?.product && (
        <Text style={{ color: "red", marginTop: 8 }}>
          {errors.establishment.product.message}
        </Text>
      )}

      <Controller
        name="establishment.score"
        control={control}
        render={({ field: { onChange, value } }) => (
          <ToggleScore
            value={value ?? scoreValue}
            onValueChange={(newValue) => {
              clearErrors("establishment.score");
              onChange(newValue);
            }}
          />
        )}
      />

      {errors?.establishment?.score && (
        <Text style={{ color: "red", marginTop: 8 }}>
          {errors.establishment.score.message}
        </Text>
      )}
    </>
  );
};

export default MaterialsAndScoreSection;
