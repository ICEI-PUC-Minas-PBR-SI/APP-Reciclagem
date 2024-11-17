import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { FormSectionContainer } from "@/src/components/Containers";



const AddressForm = ({
  addressData,
  marker,
  region,
  handleAddressChange,
  handleMapPress,
}: any) => {
  return (
    <FormSectionContainer>
      {/* Address Inputs */}
      <SimpleInput
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
      />

      <View style={{ borderRadius: 40 }}>
        <MapView style={styles.map} region={region} onPress={handleMapPress}>
          <Marker coordinate={marker} />
        </MapView>
      </View>
    </FormSectionContainer>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 300,
  },
});

export default AddressForm;
