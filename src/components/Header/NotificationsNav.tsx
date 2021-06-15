import { Flex, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
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

    </Flex>
  )
}