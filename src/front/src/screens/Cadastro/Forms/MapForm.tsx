import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Alert, StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface FormData {
  adress: {
    street: string;
    city: string;
    state: string;
    cep: string;
    number: string;
  };
  map: {
    latitude: number;
    longitude: number;
  };
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 300,
  },
});

const MapForm = () => {
  const { register, setValue, watch } = useFormContext<FormData>();

  useEffect(() => {
    register("map.latitude", { value: 0 });
    register("map.longitude", { value: 0 });
  }, [register]);

  const latitude = watch("map.latitude") || -23.55052;
  const longitude = watch("map.longitude") || -46.633308;

  const fetchAddress = async (latitude: number, longitude: number) => {
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (address.length > 0) {
        const { postalCode, subregion, region, street, streetNumber } =
          address[0];
        setValue("adress.street", street || "");
        setValue("adress.city", subregion || "");
        setValue("adress.state", region || "");
        setValue("adress.cep", postalCode || "");
        setValue("adress.number", streetNumber || "");
      } else {
        Alert.alert(
          "Endereço não encontrado",
          "Não foi possível obter o endereço para as coordenadas selecionadas."
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao buscar o endereço:", error.message, error.stack);
        Alert.alert(
          "Erro",
          "Não foi possível buscar o endereço. Tente novamente."
        );
      } else {
        console.error("Erro desconhecido:", error);
        Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
      }
    }
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissão negada",
          "As permissões de localização são necessárias para utilizar o mapa."
        );
        return;
      }
    };
    requestPermissions();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchAddress(latitude, longitude);
    }
  }, [latitude, longitude]);

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate || {};

    if (latitude && longitude) {
      setValue("map.latitude", latitude);
      setValue("map.longitude", longitude);
      await fetchAddress(latitude, longitude);
    } else {
      console.error("Coordenadas inválidas no evento de clique.");
    }
  };

  if (!latitude || !longitude) {
    Alert.alert("Erro", "Coordenadas iniciais não foram definidas.");
    return <Text>Carregando mapa...</Text>;
  }

  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
};

export default MapForm;
