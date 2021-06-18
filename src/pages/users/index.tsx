import { 
  Table, 
  Tbody,
  Th, 
  Tr,
  Td, 
  Checkbox, 
  Thead, 
  Box,
  Text, 
  Flex, 
  Heading, 
  Button, 
  Icon, 
  useBreakpointValue} 
from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' aling='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button 
                as='a' 
                size='sm' 
                fontSize='sm' 
                colorScheme='pink'
                cursor='pointer'
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' witdh='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion &&  <Th w='6'></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Marcos Kloss</Text>
                    <Text fontSize='sm' color='gray.300'>marcoskloss@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button 
                      as='a' 
                      size='sm' 
                      fontSize='sm' 
                      colorScheme='purple'
                      cursor='pointer'
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Marcos Kloss</Text>
                    <Text fontSize='sm' color='gray.300'>marcoskloss@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                   <Td>
                  <Button 
                    as='a' 
                    size='sm' 
                    fontSize='sm' 
                    colorScheme='purple'
                    cursor='pointer'
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Marcos Kloss</Text>
                    <Text fontSize='sm' color='gray.300'>marcoskloss@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                {isWideVersion && (
                   <Td>
                  <Button 
                    as='a' 
                    size='sm' 
                    fontSize='sm' 
                    colorScheme='purple'
                    cursor='pointer'
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}