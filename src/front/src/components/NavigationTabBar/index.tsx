import React, { useState } from "react";
import styled from "styled-components/native";
import { TabBarItem } from "./TabBarItem";
import { useRouter } from "expo-router";
import { logout } from "@/src/utils/auth";

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

  const handleLogout = async () => {
    try {
      await logout(); 
      router.replace("/login"); 
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
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
        icon="logout" 
        label="Sair"
        isSelected={false} 
        onPress={handleLogout}
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
