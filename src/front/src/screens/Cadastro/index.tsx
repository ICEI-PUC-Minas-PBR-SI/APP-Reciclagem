import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import {
  ContainerPage,
  FormSectionContainer,
} from "@/src/components/Containers";
import TitlePage from "@/src/components/TitlePage/inde";
import SimpleInput from "@/src/components/Input/SimpleInput";
import Button from "@/src/components/Button";
import ToggleButtonGroup from "../Register/components/ToggleButtonGroup";
import UserForm from "./Forms/UserForm";
import DividerHorizontal from "@/src/components/Divider";
import ClientForm from "./Forms/ClientForm";
import AdressForm from "./Forms/AdressForm";
import MapForm from "./Forms/MapForm";
import useLocation from "@/src/hooks/useLocation";
import EstablishmentForm from "./Forms/EstablishmentForm";
import MaterialsAndScoreSection from "./Forms/MaterialsAndScoreSection";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  requestForegroundPermissionsAsync,
} from "expo-location";

const FormContainer = styled.View`
  gap: 18px;
`;

interface FormData {
  user: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  client: {
    fullName: string;
    phone: string;
    status: boolean;
  };
  establishment: {
    name: string;
    phone: string;
    product: string[];
    score: boolean;
  };
  adress: {
    district: string;
    complement: string;
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
  };
  map: {
    latitude: number;
    longitude: number;
  };
}

const Cadastro = () => {
  const [activeProfile, setActiveProfile] = useState<"CLIENT" | "COLETOR">(
    "CLIENT"
  );

  const methods = useForm<FormData>({
    defaultValues: {
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      client: {
        fullName: "",
        phone: "",
        status: false,
      },
      establishment: {
        name: "",
        phone: "",
        product: [],
        score: false,
      },
      adress: {
        district: "",
        complement: "",
        cep: "",
        city: "",
        state: "",
        street: "",
        number: "",
      },
      map: {
        latitude: -19.912998,
        longitude: -43.940933,
      },
    },
  });

  const { setValue, handleSubmit, watch } = methods;

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      try {
        const currentPosition = await getCurrentPositionAsync({
          accuracy: LocationAccuracy.High,
        });
        setValue("map.latitude", currentPosition.coords.latitude);
        setValue("map.longitude", currentPosition.coords.longitude);
      } catch (error) {
        console.error("Erro ao obter localização:", error);
        Alert.alert(
          "Erro de Localização",
          "Não foi possível obter a localização. Verifique suas permissões."
        );
      }
    } else {
      Alert.alert(
        "Permissão Negada",
        "Ative as permissões de localização para usar o mapa."
      );
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert(`Form Data Submitted: ${JSON.stringify(data)}`);
  };

  return (
    <ScrollView>
      <FormProvider {...methods}>
        <ContainerPage>
          <TitlePage
            title="Crie sua conta"
            subtitle="Crie sua conta e descubra o ponto de coleta mais próximo de você"
          />
          <FormContainer>
            <ToggleButtonGroup
              active={activeProfile}
              setActive={setActiveProfile}
            />
            <FormSectionContainer>
              <UserForm />
            </FormSectionContainer>
            <DividerHorizontal />
            {activeProfile == "CLIENT" ? (
              <>
                <ClientForm />
                <AdressForm />
                <MapForm />
              </>
            ) : (
              <>
                <EstablishmentForm />
                <AdressForm />
                <MapForm />
                <MaterialsAndScoreSection />
              </>
            )}
          </FormContainer>

          <Text>Dados Monitorados: {JSON.stringify(watch(), null, 2)}</Text>
          <Button
            title="Cadastrar"
            theme="primary"
            onPress={handleSubmit(onSubmit)}
          />
        </ContainerPage>
      </FormProvider>
    </ScrollView>
  );
};

export default Cadastro;
