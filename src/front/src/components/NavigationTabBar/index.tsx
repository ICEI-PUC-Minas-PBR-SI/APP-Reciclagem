import React, { useState } from "react";
import styled from "styled-components/native";
import { TabBarItem } from "./TabBarItem";
import { useRouter } from "expo-router";

export const NavigationTabBar = () => {
  const [selectedTab, setSelectedTab] = useState<string>("/");
  const router = useRouter();

  const handleNavigation = (page: string) => {
    setSelectedTab(page);

    if (page == "/") {
      router.replace(page);
    }
    router.push(page);
  };

  return (
    <TabBarContainer>
      <TabBarItem
        icon="home"
        label="Início"
        isSelected={selectedTab === "Início"}
        onPress={() => handleNavigation("/")}
      />
      <TabBarItem
        icon="map"
        label="Locais de Coleta"
        isSelected={selectedTab === "Locais de Coleta"}
        onPress={() => handleNavigation("/locals")}
      />
      <TabBarItem
        icon="recycling"
        label="Materiais"
        isSelected={selectedTab === "Materiais"}
        onPress={() => handleNavigation("/materiais")}
      />
      <TabBarItem
        icon="person"
        label="Perfil"
        isSelected={selectedTab === "Perfil"}
        onPress={() => handleNavigation("/perfil")}
      />
    </TabBarContainer>
  );
};

const TabBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 36px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
`;
