import { ContainerPage } from "@/src/components/Containers";
import MapsLocals from "./Maps";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import LocalsList from "./LocalsList";
import { TitleH2 } from "@/src/components/Texts";
import { getEstabelecimentos } from "@/src/services/api";

interface Estabelecimentos {
  id: string;
  name: string;
  neighborhood: string;
  number: number;
  score: number;
  latitude: number;
  longitude: number;
}

const LocalsPage = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimentos[]>(
    []
  );
  const [focusedPoint, setFocusedPoint] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const getEstabelecimentosRequest = async () => {
    try {
      const response = await getEstabelecimentos();
      setEstabelecimentos(response);
    } catch (err) {
      console.log("Erro ao buscar estabelecimentos:", err);
    }
  };

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      try {
        const currentPosition = await getCurrentPositionAsync({
          accuracy: LocationAccuracy.High,
        });
        setLocation(currentPosition);
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
    getEstabelecimentosRequest();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ContainerPage>
        <View style={{ borderRadius: 20, gap: 16 }}>
          <TitleH2>🏭 Locais de Coleta</TitleH2>
          {location ? (
            <MapsLocals
              latitude={location.coords.latitude}
              longitude={location.coords.longitude}
              establishments={estabelecimentos}
              focusedPoint={focusedPoint}
            />
          ) : (
            <Text>Carregando mapa...</Text>
          )}
        </View>
        <LocalsList
          estabelecimentos={estabelecimentos}
          onSelect={(latitude, longitude) =>
            setFocusedPoint({ latitude, longitude })
          }
        />
      </ContainerPage>
    </ScrollView>
  );
};

export default LocalsPage;
