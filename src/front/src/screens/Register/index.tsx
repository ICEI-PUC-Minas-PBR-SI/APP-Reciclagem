// RegisterPage.tsx
import React, { useState, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

import DividerHorizontal from "@/src/components/Divider";
import ToggleButtonGroup from "./components/ToggleButtonGroup";
import FormUser from "./components/Forms/FormUser";
import FormClient from "./components/Forms/FormClient";
import Button from "@/src/components/Button";
import { ContainerPage } from "@/src/components/Containers";
import TitlePage from "@/src/components/TitlePage/inde";
import FormCollector from "./components/Forms/FormColetor";
import { createUser } from "@/src/services/api";

const RegisterPage: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<"CLIENT" | "COLETOR">("CLIENT");
  const [error, setError] = useState<string>("");

  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [clientFormData, setClientFormData] = useState({
    full_name: "",
    district: "",
    complement: "",
    phone: "",
    status: false,
    cep: "",
    city: "",
    state: "",
    street: "",
    number: "",
    latitude: 0,
    longitude: 0,
  });

  // Collector form data
  const [collectorFormData, setCollectorFormData] = useState({
    name: "",
    phone: "",
    neighborhood: "",
    score: false,
    cep: "",
    city: "",
    state: "",
    street: "",
    number: "",
    latitude: 0,
    longitude: 0,
    product: [] as string[],
  });

  const [region, setRegion] = useState({
    latitude: -19.912998,
    longitude: -43.940933,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [marker, setMarker] = useState({
    latitude: -19.912998,
    longitude: -43.940933,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permissão de acesso à localização foi negada.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      updateLocationData(latitude, longitude);
    })();
  }, []);

  const updateLocationData = (latitude: number, longitude: number) => {
    setRegion((prev) => ({ ...prev, latitude, longitude }));
    setMarker({ latitude, longitude });

    setClientFormData((prev) => ({ ...prev, latitude, longitude }));
    setCollectorFormData((prev) => ({ ...prev, latitude, longitude }));
  };

  const handleInputChange = (formType: string, field: string, value: any) => {
    if (formType === "user") {
      setUserFormData((prev) => ({ ...prev, [field]: value }));
    } else if (formType === "client") {
      setClientFormData((prev) => ({ ...prev, [field]: value }));
    } else if (formType === "collector") {
      setCollectorFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });
    updateLocationData(latitude, longitude);
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = userFormData;
    if (!username || !email || !password) {
      return "Preencha todos os campos obrigatórios!";
    }
    if (password !== confirmPassword) {
      return "As senhas não coincidem!";
    }
    return null;
  };

  const handleSubmit = async () => {
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (activeProfile === "CLIENT") {
        const user = {
          profile_name: "CLIENT",
          full_name: clientFormData.full_name,
          district: clientFormData.city,
          number: clientFormData.number,
          complement: "",
          phone: clientFormData.phone,
          status: true,
          cep: clientFormData.cep,
          state: clientFormData.state,
          street: clientFormData.street,
          latitude: clientFormData.latitude,
          longitude: clientFormData.longitude
        }
        createUser(user)
      } else if (activeProfile === "COLETOR") {
        // Lógica de submissão para COLETOR
      }
      Alert.alert("Conta criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar:", error);
      Alert.alert("Erro ao criar. Por favor, tente novamente.");
    }
  };

  return (
    <ScrollView>
      <ContainerPage>
        <TitlePage
          title="Crie sua conta"
          subtitle="Crie sua conta e descubra o ponto de coleta mais próximo de você"
        />

        <FormContainer>
          <ToggleButtonGroup active={activeProfile} setActive={setActiveProfile} />
          <FormUser formData={userFormData} onInputChange={(field, value) => handleInputChange("user", field, value)} />
          <DividerHorizontal />

          {activeProfile === "CLIENT" ? (
            <FormClient
              formData={clientFormData}
              handleChange={(field, value) => handleInputChange("client", field, value)}
              marker={marker}
              region={region}
              handleMapPress={handleMapPress}
            />
          ) : (
            <FormCollector
              establishmentData={collectorFormData}
              handleChange={(field: any, value: any) => handleInputChange("collector", field, value)}
              selectedMaterials={collectorFormData.product}
              setSelectedMaterials={(materials: any) => setCollectorFormData((prev) => ({ ...prev, product: materials }))}
              marker={marker}
              region={region}
              handleMapPress={handleMapPress}
            />
          )}
        </FormContainer>
        <Button title="Cadastrar" theme="primary" onPress={handleSubmit} />
      </ContainerPage>
    </ScrollView>
  );
};

const FormContainer = styled.View`
  gap: 18px;
`;

export default RegisterPage;
