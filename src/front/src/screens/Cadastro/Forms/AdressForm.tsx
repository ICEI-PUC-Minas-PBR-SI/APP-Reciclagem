import { FormSectionContainer } from '@/src/components/Containers';
import SimpleInput from '@/src/components/Input/SimpleInput';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

interface FormData {
  adress: {
    district: "",
    complement: "",
    cep: "",
    city: "",
    state: "",
    street: "",
    number: "",
  };
}

const AdressForm = () => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <>
      <FormSectionContainer>
        <Controller
          name="adress.cep"
          control={control}
          rules={{
            required: 'O CEP é obrigatório',
            pattern: {
              value: /^\d{5}-\d{3}$/,
              message: 'Digite um CEP válido no formato XXXXX-XXX',
            },
          }}
          render={({ field: { onChange, value } }) => {
            const formatCEP = (text: string) => {
              // Remove caracteres não numéricos
              const cleanText = text.replace(/\D/g, '');
              // Aplica a máscara XXXXX-XXX
              return cleanText.replace(/(\d{5})(\d{0,3})/, '$1-$2');
            };

            return (
              <SimpleInput
                label="CEP"
                placeholder="Insira seu CEP"
                value={value}
                onChangeText={(text) => {
                  clearErrors('adress.cep');
                  const formattedText = formatCEP(text);
                  onChange(formattedText);
                }}
                keyboardType="numeric"
                error={errors?.adress?.cep?.message || ''}
                isRequired
              />
            );
          }}
        />
        <Controller
          name="adress.city"
          control={control}
          rules={{
            required: 'Cidade é Obrigatório',

          }}
          render={({ field: { onChange, value } }) => {
            return (
              <SimpleInput
                label="Cidade"
                placeholder="Insira sua Cidade"
                value={value}
                onChangeText={(text) => {
                  clearErrors('adress.city');
                  onChange(text);
                }}
                autoCapitalize="words"
                error={errors?.adress?.city?.message || ''}
                isRequired
              />
            );
          }}
        />
        <Controller
          name="adress.city"
          control={control}
          rules={{
            required: 'Cidade é obrigatória',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <label htmlFor="estados-brasil">Estado</label>
              <select
                id="estados-brasil"
                value={value}
                onChange={(e) => {
                  onChange(e.target.value); // Atualiza o valor no formulário
                }}
              >
                <option value="">Selecione um estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              {error && <p style={{ color: 'red' }}>{error.message}</p>}
            </div>
          )}
        />


        {/* <SimpleInput
          label="CEP"
          placeholder="Insira seu CEP"
          value={addressData.cep}
          onChangeText={(value) => handleAddressChange("cep", value)}
          keyboardType="numeric"
          isRequired
        />

        <SimpleInput
          label="Cidade"
          placeholder="Insira sua cidade"
          value={addressData.city}
          onChangeText={(value) => handleAddressChange("city", value)}
          isRequired
        />

        <SimpleInput
          label="Estado"
          placeholder="Insira seu estado"
          value={addressData.state}
          onChangeText={(value) => handleAddressChange("state", value)}
          isRequired
        />

        <SimpleInput
          label="Rua"
          placeholder="Insira sua rua"
          value={addressData.street}
          onChangeText={(value) => handleAddressChange("street", value)}
          isRequired
        />

        <SimpleInput
          label="Número"
          placeholder="Insira o número"
          value={addressData.number}
          onChangeText={(value) => handleAddressChange("number", value)}
          keyboardType="numeric"
          isRequired
        /> */}
      </FormSectionContainer>
    </>
  );
};

export default AdressForm;