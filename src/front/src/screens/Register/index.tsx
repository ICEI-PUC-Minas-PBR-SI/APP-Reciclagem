import React, { useState, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import * as Location from "expo-location";
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
import { useLocation } from "@/src/hooks/useLocation";

const RegisterPage: React.FC = () => {
  const { region, setRegion, error: locationError } = useLocation();
  const [activeProfile, setActiveProfile] = useState<"CLIENT" | "COLETOR">("CLIENT");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState<any>({
    user: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    client: {
      fullName: "",
      district: "",
      complement: "",
      phone: "",
      status: false,
      cep: "",
      city: "",
      state: "",
      street: "",
      number: "",
      latitude: region.latitude,
      longitude: region.longitude,
    },
    collector: {
      name: "",
      phone: "",
      neighborhood: "",
      score: false,
      cep: "",
      city: "",
      state: "",
      street: "",
      number: "",
      latitude: region.latitude,
      longitude: region.longitude,
      product: [] as string[],
    },
  });

  const handleInputChange = (profile: string, field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [profile]: { ...prev[profile], [field]: value },
    }));
  };

  const validateForm = () => {
    const profileData = activeProfile === "CLIENT" ? formData.client : formData.collector;

    if (activeProfile === "CLIENT") {
      if (!profileData.fullName || !profileData.phone || !profileData.cep) {
        return "Preencha todos os campos obrigatórios!";
      }
    } else if (activeProfile === "COLETOR") {
      if (!profileData.name || !profileData.phone || profileData.product.length === 0) {
        return "Preencha todos os campos obrigatórios!";
      }
    }

    if (!formData.user.username || !formData.user.email || !formData.user.password) {
      return "Preencha todos os campos de usuário!";
    }

    if (formData.user.password !== formData.user.confirmPassword) {
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

    setLoading(true);
    try {
      const user = {
        profile_name: activeProfile,
        ...(activeProfile === "CLIENT" ? formData.client : formData.collector),
      };
      await createUser(user);
      Alert.alert("Conta criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar:", error);
      Alert.alert("Erro ao criar. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const formFields =
    activeProfile === "CLIENT"
      ? [
        { name: "full_name", placeholder: "Nome completo" },
        { name: "phone", placeholder: "Telefone" },
        { name: "cep", placeholder: "CEP" },
        { name: "city", placeholder: "Cidade" },
        { name: "street", placeholder: "Rua" },
        { name: "number", placeholder: "Número" },
      ]
      : [
        { name: "name", placeholder: "Nome" },
        { name: "phone", placeholder: "Telefone" },
        { name: "cep", placeholder: "CEP" },
        { name: "city", placeholder: "Cidade" },
        { name: "street", placeholder: "Rua" },
        { name: "number", placeholder: "Número" },
      ];

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
