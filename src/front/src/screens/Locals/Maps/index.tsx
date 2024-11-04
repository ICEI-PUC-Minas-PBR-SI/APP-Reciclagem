import React from "react";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

const Container = styled.View`
  height: 450px;
  border-radius: 24px;
  overflow: hidden;
`;

const MapsLocals = ({
  latitude,
  longitude,
  latitudeMaker,
  longitudeMaker,
}: any) => {
  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitudeMaker,
            longitude: longitudeMaker,
          }}
        />
      </MapView>
    </Container>
  );
};

export default MapsLocals;
