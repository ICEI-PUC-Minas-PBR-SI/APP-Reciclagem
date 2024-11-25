import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

const Container = styled.View`
  height: 450px;
  border-radius: 24px;
  overflow: hidden;
`;

interface MapsLocalsProps {
  latitude: number;
  longitude: number;
  establishments: {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
  }[];
  focusedPoint: { latitude: number; longitude: number } | null;
}

const MapsLocals: React.FC<MapsLocalsProps> = ({
  latitude,
  longitude,
  establishments,
  focusedPoint,
}) => {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (focusedPoint && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: focusedPoint.latitude,
          longitude: focusedPoint.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        500
      );
    }
  }, [focusedPoint]);

  const validEstablishments = establishments.filter(
    (item) => item.latitude !== 0 && item.longitude !== 0
  );

  return (
    <Container>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="Você está aqui"
          pinColor={"blue"}
        />

        {validEstablishments.map((item) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.name}
            pinColor="green"
          />
        ))}
      </MapView>
    </Container>
  );
};

export default MapsLocals;
