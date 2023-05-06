import React from "react";
import styled from "styled-components/native";

import LogoutIcon from "../assets/icons/logout-icon.svg";
import VerifiedIcon from "../assets/icons/verified-icon.svg";
import { useAuthStore } from "../store";
import { colors } from "../styles/theme";
import { Heading, Text } from "../ui";

export default function Profile({ navigation }: any) {
  const _logout = useAuthStore((state) => state.logout);
  
  return (
    <ProfileContainer>
      <ProfileBanner
        source={require("../assets/images/banner-profile.png")}
      >
        <ProfileAvatar
          source={require("../assets/images/profile-avatar.png")}
        />
        <ProfileButtonLogout onPress={() => {
          _logout();
          navigation.navigate("Auth");
        }}>
          <LogoutIcon />
        </ProfileButtonLogout>
      </ProfileBanner>

      <ProfileInfoContainer>
        <ProfileNameContainer>
          <Heading
            marginRight="5px"
            marginBottom="-3px"
            fontSize="16px"
            textTransform="capitalize"
          >
            Mia Ramirez
          </Heading>
          <VerifiedIcon />
        </ProfileNameContainer>
        <Text fontSize="14px">@miaramirez</Text>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.View``;

const ProfileBanner = styled.ImageBackground`
  height: 120px;
  position: relative;
`;

const ProfileAvatar = styled.Image`
  position: absolute;
  bottom: -50px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 20px;
`;

const ProfileNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileButtonLogout = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${colors.primary};
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInfoContainer = styled.View`
  margin-top: 60px;
  padding: 0 20px;
`;
