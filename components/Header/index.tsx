import React from "react";
import { Stack, useTheme, Box, useMediaQuery } from "@mui/material";
import { Text } from "@/components";
import Image from "next/image";
import { useHeaderStyle } from "./styles";

interface HeaderProps {
  changeThemeHandler: (arg: boolean) => void;
  isDarkTheme: boolean
}
export default function Header({ changeThemeHandler, isDarkTheme }: HeaderProps) {
  const theme = useTheme();
  const { palette } = theme;
  const sx = useHeaderStyle({ theme });
  const name = 'Jane Cooper'
  const matchesMD = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <nav>
      <Stack justifyContent={'space-between'} direction={'row'} sx={sx.headerContainer}>
        {/* icon with text*/}
        <Stack spacing={2} direction={'row'}>
          {/* back icon */}
          <Stack sx={sx.backIconContainer}>
            <Image
              src="/assets/back-icon.png"
              width={30}
              height={30}
              alt="arrow"
            />
          </Stack>
          {/* header */}
          <Box>
            <Stack spacing={1} direction={'row'}>
              <Text color={palette.text.primary} fontWeight={'500'} fontSize={16}>Media management</Text>
              <Image
                style={{ objectFit: "contain" }}
                src="/assets/edit-icon.png"
                width={16}
                height={16}
                alt="pencil"
              />
            </Stack>
            <Text color={palette.text.secondary}>Draft campaign</Text>
          </Box>
        </Stack>
        {/* profile side */}
        <Stack spacing={2} direction={'row'}>

          {/* header */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Text textAlign={'right'} color={palette.text.primary} fontWeight={'500'} fontSize={16}>{name}</Text>
            <Text onClick={() => changeThemeHandler(!isDarkTheme)} textAlign={'right'} className="pointer" fontWeight={'300'} sx={sx.changeProfile} color={palette.secondary.main}>Change profile</Text>
          </Box>
          {/* profile icon */}
          <Image
            src={`https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg`}
            width={matchesMD ? 20 : 50}
            style={{ borderRadius: 15 }}

            height={matchesMD ? 20 : 50}
            alt="Picture of the author"
          />
        </Stack>
      </Stack>
    </nav>
  );
}
