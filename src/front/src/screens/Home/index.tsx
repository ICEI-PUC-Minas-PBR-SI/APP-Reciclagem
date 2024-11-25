import { Link, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ContainerPage } from "@/src/components/Containers";
import { Tabs } from "./components/Tabs";
import { NavigationTabBar } from "@/src/components/NavigationTabBar";
import MaterialsList from "./components/MaterialsList";
import { checkToken } from "@/src/utils/auth";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<string>("Materiais");

  useEffect(() => {
    checkToken();
  }, []);

  const handleNavigation = (page: string) => {
    setSelectedTab(page);
    router.navigate(page);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ContainerPage>
        <Tabs.Container>
          <Tabs.Item
            selected={selectedTab === "/user"}
            onPress={() => handleNavigation("/user")}
          >
            <Tabs.Icon icon="♻️" selected={selectedTab === "/user"} />
            <Tabs.Title title="Materiais" selected={selectedTab === "/user"} />
          </Tabs.Item>

          <Tabs.Item
            selected={selectedTab === "Locais de Coleta"}
            onPress={() => handleNavigation("/locals")}
          >
            <Tabs.Icon
              icon="🏭"
              selected={selectedTab === "Locais de Coleta"}
            />
            <Tabs.Title
              title="Locais de Coleta"
              selected={selectedTab === "Locais de Coleta"}
            />
          </Tabs.Item>

          <Tabs.Item
            selected={selectedTab === "Histórico de Pontos"}
            onPress={() => handleNavigation("/historico-de-pontos")}
          >
            <Tabs.Icon
              icon="📋"
              selected={selectedTab === "Histórico de Pontos"}
            />
            <Tabs.Title
              title="Histórico de Pontos"
              selected={selectedTab === "Histórico de Pontos"}
            />
          </Tabs.Item>
        </Tabs.Container>
        <MaterialsList />
      </ContainerPage>
      {/* <NavigationTabBar /> */}
    </ScrollView>
  );
}
