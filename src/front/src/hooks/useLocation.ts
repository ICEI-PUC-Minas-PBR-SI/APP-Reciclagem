import { useState, useEffect } from "react";
import * as Location from "expo-location";

interface LocationData {
  latitude: number;
  longitude: number;
  error: string | null;
}

const useLocation = (): LocationData => {
  const [location, setLocation] = useState<LocationData>({
    latitude: 0,
    longitude: 0,
    error: null,
  });

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        ("Permissão de acesso à localização foi negada.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocation({
        latitude: latitude,
        longitude: longitude,
        error: null,
      });
    };

    getLocation();
  }, []);

  return location;
};

export default useLocation;
