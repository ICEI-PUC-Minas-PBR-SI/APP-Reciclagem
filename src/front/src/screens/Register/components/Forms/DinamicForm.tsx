import React from "react";
import FormUser from "./FormUser";
import FormCollector from "./FormColetor";
import FormClient from "./FormClient";
import { Text } from "react-native";

interface DynamicFormProps {
    profileType: "user" | "client" | "collector";
    formData: any;
    handleChange: (field: string, value: any) => void;
    selectedMaterials?: string[];
    setSelectedMaterials?: (materials: string[]) => void;
    marker: { latitude: number; longitude: number };
    region: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
    handleMapPress: (event: any) => void;
}

const DynamicForm = ({
    profileType,
    formData,
    handleChange,
    selectedMaterials,
    setSelectedMaterials,
    marker,
    region,
    handleMapPress,
}: DynamicFormProps) => {
    switch (profileType) {
        case "user":
            return (
                <FormUser
                    formData={formData}
                    onInputChange={(field, value) => handleChange(field, value)}
                />
            );
        case "client":
            return (
                <FormClient
                    formData={formData}
                    handleChange={handleChange}
                    marker={marker}
                    region={region}
                    handleMapPress={handleMapPress}
                />
            );
        case "collector":
            return (
                <FormCollector
                    establishmentData={formData}
                    handleChange={handleChange}
                    selectedMaterials={selectedMaterials || []}
                    setSelectedMaterials={setSelectedMaterials || (() => { })}
                    marker={marker}
                    region={region}
                    handleMapPress={handleMapPress}
                />
            );
        default:
            return <Text>Perfil não reconhecido</Text>;
    }
};

export default DynamicForm;
