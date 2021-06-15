import { Flex, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
    <HStack 
      spacing={['6', '8']}
      pr={['6', '8']}
      mx={['6', '8']}
      borderRightWidth={1}
      borderColor='gray.700'
      color='gray.300'
      py='1'
    >
      <Icon as={RiNotificationLine} />
      <Icon as={RiUserLine} />
    </HStack>
  );
}