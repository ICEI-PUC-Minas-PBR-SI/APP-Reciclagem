import { Link, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import React, { useState } from "react";
import styled from "styled-components/native";
import { ContainerPage } from "@/src/components/Containers";
import { Tabs } from "./components/Tabs";
import { NavigationTabBar } from "@/src/components/NavigationTabBar";
import MaterialsList from "./components/MaterialsList";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<string>("Materiais");
  const tokenLogin = async () => {
    const token = await SecureStore.getItemAsync("Local_Token");
    if (token == null) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    tokenLogin();
  });

  const handleNavigation = (page: string) => {
    setSelectedTab(page);
    router.push(page);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ContainerPage>
        <Tabs.Container>
          <Tabs.Item
            selected={selectedTab === "/index"}
            onPress={() => handleNavigation("/index")}
          >
            <Tabs.Icon icon="♻️" selected={selectedTab === "/index"} />
            <Tabs.Title title="Materiais" selected={selectedTab === "/index"} />
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
      <NavigationTabBar />
    </ScrollView>
  );
}
