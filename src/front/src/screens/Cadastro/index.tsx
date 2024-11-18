import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { ContainerPage, FormSectionContainer } from '@/src/components/Containers';
import TitlePage from '@/src/components/TitlePage/inde';
import SimpleInput from '@/src/components/Input/SimpleInput';
import Button from '@/src/components/Button';
import ToggleButtonGroup from '../Register/components/ToggleButtonGroup';
import UserForm from './Forms/UserForm';
import DividerHorizontal from '@/src/components/Divider';
import ClientForm from './Forms/ClientForm';
import AdressForm from './Forms/AdressForm';

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
  adress: {
    district: string;
    complement: string;
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
  }
}

const Cadastro = () => {
  const [activeProfile, setActiveProfile] = useState<"CLIENT" | "COLETOR">("CLIENT");

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

        // latitude: region.latitude,
        // longitude: region.longitude,
      },
      adress: {
        district: "",
        complement: "",
        cep: "",
        city: "",
        state: "",
        street: "",
        number: "",
      }
      // collector: {
      //   name: "",
      //   phone: "",
      //   neighborhood: "",
      //   score: false,
      //   cep: "",
      //   city: "",
      //   state: "",
      //   street: "",
      //   number: "",
      //   latitude: region.latitude,
      //   longitude: region.longitude,
      //   product: [] as string[],
      // },
    },

  });

  const { handleSubmit, watch } = methods;

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
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
            <ToggleButtonGroup active={activeProfile} setActive={setActiveProfile} />
            <FormSectionContainer>
              <UserForm />
            </FormSectionContainer>
            <DividerHorizontal />
            <ClientForm />
            <DividerHorizontal />
            <AdressForm />
          </FormContainer>

          <Text>Dados Monitorados: {JSON.stringify(watch(), null, 2)}</Text>
          <Button title="Cadastrar" theme="primary" onPress={handleSubmit(onSubmit)} />
        </ContainerPage></FormProvider>
    </ScrollView>
  );
};

export default Cadastro;
