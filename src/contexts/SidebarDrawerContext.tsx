import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext, ElementType } from "react";

interface SidebarDrawerProviderProps {
  children: ElementType;
}

type SidebarDrawerProviderData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerProviderData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath])
  
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);