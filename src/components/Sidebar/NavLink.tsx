import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';

import { ActiveLink } from '../ActiveLink';

interface NavLink extends ChakraLinkProps {
  children: string;
  icon: ElementType;
  href: string;
}
 
export function NavLink({ children, icon, href, ...rest }: NavLink) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}