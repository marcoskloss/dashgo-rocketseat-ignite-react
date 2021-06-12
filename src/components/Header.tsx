import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        dashgo
        <Text as='span' ml='1' color='pink.500'>.</Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        align='center'
        py='4'
        px='8'
        ml='6'
        maxW={400}
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input 
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize='18' />
      </Flex>

      <Flex
        align='center'
        ml='auto'
      >
        <HStack 
          spacing='4'
          borderRightWidth={1}
          borderColor='gray.700'
          color='gray.300'
          mx='8'
          pr='8'
          py='1'
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserLine} />
        </HStack>

        <Flex align='center'>
          <Box mr='4' textAlign='center'>
            <Text>Marcos Kloss</Text>
            <Text color='gray.300' fontSize='small'>
              marcoskloss@gmail.com
            </Text>
          </Box>

          <Avatar  size='md' name='Marcos Kloss' src='https://github.com/marcoskloss.png' />
        </Flex>
      </Flex>
    </Flex>
  );
}