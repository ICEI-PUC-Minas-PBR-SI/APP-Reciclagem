import { ContainerPage } from "@/src/components/Containers";
import MapsLocals from "./Maps"; // Ajuste a importação conforme necessário
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import LocalsList from "./LocalsList";
import { TitleH2 } from "@/src/components/Texts";

const LocalsPage = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <ContainerPage>
      <View style={{ borderRadius: 20, gap: 16 }}>
        <TitleH2>🏭 Locais de Coleta</TitleH2>
        {location ? (
          <MapsLocals
            latitude={location.coords.latitude}
            longitude={location.coords.longitude}
            latitudeMaker={location.coords.latitude}
            longitudeMaker={location.coords.longitude}
          />
        ) : (
          <Text>Carregando mapa...</Text>
        )}
      </View>
      <LocalsList />
    </ContainerPage>
  );
};

export default LocalsPage;
