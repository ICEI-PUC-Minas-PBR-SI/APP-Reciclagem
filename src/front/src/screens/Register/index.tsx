import React, { useState, useEffect } from "react";
import { Alert, ScrollView, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import FormUser from "./components/Forms/FormUser";
import DividerHorizontal from "@/src/components/Divider";
import FormClient from "./components/Forms/FormClient";
import TitlePage from "@/src/components/TitlePage/inde";
import ToggleButtonGroup from "./components/ToggleButtonGroup";
import { ContainerPage } from "@/src/components/Containers";
import FormCollector from "./components/Forms/FormColetor";
import styled from "styled-components/native";
import Button from "@/src/components/Button";

const RegisterPage = () => {
  const [active, setActive] = useState("CLIENT");
  const [error, setError] = useState<string>("");

  const [formDataUserLogin, setFormDataUserLogin] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputUserForm = (field: string, value: string) => {
    setFormDataUserLogin((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [formDataClient, setFormDataClient] = useState({
    full_name: "",
    phone: "",
    cep: "",
    city: "",
    state: "",
    street: "",
    number: "",
    latitude: "",
    longitude: "",
  });

  const handleInputClientForm = (field: string, value: string) => {
    setFormDataClient((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [establishmentData, setEstablishmentData] = useState({
    name: "",
    phone: "",
    district: "",
    score: false,
    cep: "",
    city: "",
    state: "",
    street: "",
    number: "",
    latitude: "",
    longitude: "",
    materialsCollected: [],
  });

  const handleInputEstablishmentForm = (
    field: string,
    value: string | boolean
  ) => {
    setEstablishmentData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // const handleChangeMaterials = (materials: string[]) => {
  //   setSelectedMaterials(materials);
  //   handleInputEstablishmentForm("materialsCollected", materials);
  // };

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
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permissão de acesso à localização foi negada.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        ...region,
        latitude,
        longitude,
      });
      setMarker({
        latitude,
        longitude,
      });

      handleInputClientForm("latitude", latitude.toString());
      handleInputClientForm("longitude", longitude.toString());
      handleInputEstablishmentForm("latitude", latitude.toString());
      handleInputEstablishmentForm("longitude", longitude.toString());

      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (address.length > 0) {
        const { postalCode, subregion, region, street } = address[0];
        handleInputClientForm("cep", postalCode || "");
        handleInputClientForm("city", subregion || "");
        handleInputClientForm("state", region || "");
        handleInputClientForm("street", street || "");

        handleInputEstablishmentForm("district", subregion || "");
      }
    })();
  }, []);

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });

    handleInputClientForm("latitude", latitude.toString());
    handleInputClientForm("longitude", longitude.toString());
    handleInputEstablishmentForm("latitude", latitude.toString());
    handleInputEstablishmentForm("longitude", longitude.toString());

    const address = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (address.length > 0) {
      const { city, region, street } = address[0];
      handleInputClientForm("city", city || "");
      handleInputClientForm("state", region || "");
      handleInputClientForm("street", street || "");

      handleInputEstablishmentForm("district", city || "");
    }
  };

  const handleSubmit = async () => {
    setError("");

    const validationError = validateForm(
      formDataUserLogin,
      formDataUserLogin.confirmPassword
    );
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (active === "CLIENT") {
        // Lógica de submissão para CLIENT
      } else if (active === "COLLECTOR") {
        // Lógica de submissão para COLLECTOR
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
          <ToggleButtonGroup active={active} setActive={setActive} />
          <FormUser
            formData={formDataUserLogin}
            onInputChange={handleInputUserForm}
          />
          <DividerHorizontal />

          {active === "CLIENT" ? (
            <>
              <FormClient
                formData={formDataClient}
                handleChange={handleInputClientForm}
                marker={marker}
                region={region}
                handleMapPress={handleMapPress}
              />
            </>
          ) : (
            <>
              <FormCollector
                establishmentData={establishmentData}
                handleChange={handleInputEstablishmentForm}
                selectedMaterials={selectedMaterials}
                setSelectedMaterials={setSelectedMaterials}
                marker={marker}
                region={region}
                handleMapPress={handleMapPress}
              />
            </>
          )}
        </FormContainer>
        <Button title="Cadastrar" theme="primary" onPress={handleSubmit} />
      </ContainerPage>
    </ScrollView>
  );
};

const validateForm = (formData: any, confirmPassword: string) => {
  const { username, email, password } = formData;
  if (!username || !email || !password) {
    return "Preencha todos os campos obrigatórios!";
  }
  if (password !== confirmPassword) {
    return "As senhas não coincidem!";
  }
  return null;
};

const FormContainer = styled.View`
  gap: 18px;
`;

export default RegisterPage;
