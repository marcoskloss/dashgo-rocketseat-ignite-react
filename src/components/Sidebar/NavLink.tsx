import { Link, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLink extends ChakraLinkProps {
  children: string;
  icon: ElementType;
}

export function NavLink({ children, icon, ...rest }: NavLink) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20'/>
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link>
  );
}