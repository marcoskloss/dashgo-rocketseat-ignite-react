import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='center'>
          <Text>Marcos Kloss</Text>
          <Text color='gray.300' fontSize='small'>
            marcoskloss@gmail.com
          </Text>
        </Box>
      )}

      <Avatar  size='md' name='Marcos Kloss' src='https://github.com/marcoskloss.png' />
    </Flex>
  );
}