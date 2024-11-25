import React, { useState } from "react";
import styled from "styled-components/native";
import { TabBarItem } from "./TabBarItem";
import { useRouter } from "expo-router";
import { logout } from "@/src/utils/auth";

const ROUTES = {
  home: "/user",
  locals: "/user/locals",
  materials: "/",
};

export const NavigationTabBar = () => {
  const [selectedTab, setSelectedTab] = useState<string>(ROUTES.home);
  const router = useRouter();

  const handleNavigation = (page: string) => {
    setSelectedTab(page);
    router.push(page);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.replace(ROUTES.home);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <TabBarContainer>
      <TabBarItem
        icon="home"
        label="Início"
        isSelected={selectedTab === ROUTES.home}
        onPress={() => handleNavigation(ROUTES.home)}
      />
      <TabBarItem
        icon="map"
        label="Locais de Coleta"
        isSelected={selectedTab === ROUTES.locals}
        onPress={() => handleNavigation(ROUTES.locals)}
      />
      <TabBarItem
        icon="recycling"
        label="Materiais"
        isSelected={selectedTab === ROUTES.materials}
        onPress={() => handleNavigation(ROUTES.materials)}
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
