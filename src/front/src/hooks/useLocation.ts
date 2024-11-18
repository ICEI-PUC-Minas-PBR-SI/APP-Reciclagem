import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [region, setRegion] = useState({
    latitude: -19.912998,
    longitude: -43.940933,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permissão de acesso à localização foi negada.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setRegion((prev) => ({ ...prev, latitude, longitude }));
    })();
  }, []);

  return { region, setRegion, error };
};