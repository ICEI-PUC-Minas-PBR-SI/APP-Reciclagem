import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { useForm, FormProvider } from "react-hook-form";
import {
  ContainerPage,
  FormSectionContainer,
} from "@/src/components/Containers";
import TitlePage from "@/src/components/TitlePage/inde";
import Button from "@/src/components/Button";
import ToggleButtonGroup from "../Register/components/ToggleButtonGroup";
import UserForm from "./Forms/UserForm";
import DividerHorizontal from "@/src/components/Divider";
import ClientForm from "./Forms/ClientForm";
import AdressForm from "./Forms/AdressForm";
import MapForm from "./Forms/MapForm";
import MaterialsAndScoreSection from "./Forms/MaterialsAndScoreSection";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { createEstablishment, createUser } from "@/src/services/api";
import { router } from "expo-router";
import EstablishmentForm from "./Forms/EstablishmentForm";

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
  const [activeProfile, setActiveProfile] = useState<"CLIENT" | "COLLECTOR">(
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
    try {
      if (activeProfile == "CLIENT") {
        const user = {
          profile_name: "CLIENT",
          full_name: data.client.fullName,
          email: data.user.email,
          username: data.user.username,
          number: data.adress.number,
          cep: data.adress.cep,
          street: data.adress.street,
          state: data.adress.state,
          city: data.adress.city,
          phone: data.client.phone,
          status: true,
          password: data.user.password,
          latitude: data.map.latitude,
          longitude: data.map.longitude,
        };
        const response = createUser(user);
        // router.navigate("/login");
      }

      if (activeProfile == "COLLECTOR") {
        const cleanCep = data.adress.cep.replace(/\D/g, "");
        const user = {
          profile_name: "COLLECTOR",
          full_name: data.establishment.name,
          email: data.user.email,
          username: data.user.username,
          number: data.adress.number,
          cep: data.adress.cep,
          street: data.adress.street,
          state: data.adress.state,
          city: data.adress.city,
          phone: data.establishment.phone,
          status: true,
          password: data.user.password,
          latitude: data.map.latitude,
          longitude: data.map.longitude,
        };
        const responseUser = createUser(user);

        const establishment = {
          name: data.establishment.name,
          district: data.adress.city,
          neighborhood: data.adress.street,
          number: Number(data.adress.number),
          phone: data.establishment.phone,
          product: data.establishment.product,
          score: data.establishment.score,
          cep: Number(cleanCep),
          latitude: data.map.latitude,
          longitude: data.map.longitude,
        };

        const responseEsta = createEstablishment(establishment);
        router.navigate("/");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      Alert.alert("Erro", "Não foi possível concluir o cadastro.");
    }
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
