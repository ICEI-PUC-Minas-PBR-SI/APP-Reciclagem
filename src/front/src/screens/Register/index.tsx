import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { Input } from "@/src/components/Input";
import FormUser from "./components/Forms/FormUser";
import DividerHorizontal from "@/src/components/Divider";
import { FormContainer } from "./styled";
import FormClient from "./components/Forms/FormClient";
import TitlePage from "@/src/components/Divider/TitlePage/inde";
import ToggleButtonGroup from "./components/ToggleButtonGroup";
import { ContainerPage } from "@/src/components/Containers";
import FormCollector from "./components/Forms/FormColetor";

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
    latitude: "", // Campo para latitude
    longitude: "", // Campo para longitude
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
  });

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const handleChange = (field: string, value: string | boolean) => {
    setEstablishmentData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [region, setRegion] = useState({
    latitude: -7.983908, // Coordenadas padrão (pode ser ajustado)
    longitude: 112.621391,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [marker, setMarker] = useState({
    latitude: -7.983908,
    longitude: 112.621391,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permissão de acesso à localização foi negada.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setMarker({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Atualizar os dados do formulário com a localização inicial
      handleInputClientForm("latitude", location.coords.latitude.toString());
      handleInputClientForm("longitude", location.coords.longitude.toString());
    })();
  }, []);

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });

    // Atualizar os dados do formulário com a nova localização
    handleInputClientForm("latitude", latitude.toString());
    handleInputClientForm("longitude", longitude.toString());
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
        // await handleClientSubmit();
      } else if (active === "COLLECTOR") {
        // await handleCollectorSubmit();
      }
      Alert.alert("Conta criada com sucesso!");
      // router.replace("/");
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
              />
              <MapView
                style={styles.map}
                region={region}
                onPress={handleMapPress} // Atualiza o marcador ao pressionar o mapa
              >
                <Marker coordinate={marker} />
              </MapView>
              <View style={styles.addressContainer}>
                <Text>Latitude: {marker.latitude}</Text>
                <Text>Longitude: {marker.longitude}</Text>
              </View>
            </>
          ) : (
            <FormCollector
              establishmentData={establishmentData}
              handleChange={handleChange}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
            />
          )}
        </FormContainer>

        <View style={{ marginTop: 16 }}>
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
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

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  addressContainer: {
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 10,
  },
});

export default RegisterPage;
