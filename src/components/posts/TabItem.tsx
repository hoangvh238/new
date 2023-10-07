import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";


type TabItemProps = {

  selected: boolean;
  setSelectTab: (value: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({  selected, setSelectTab }) => {
  const hoverBg = useColorModeValue("gray.50", "#2D3748");
  const borderColor = useColorModeValue("gray.200", "#2D3748");

  return (
    <Flex
      justify="center"
      align="center"
      flexGrow={1}
      p="14px 0px"
      cursor="pointer"
      _hover={{ bg: hoverBg }}
      color={selected ? "blue.500" : "gray.500"}
      borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
      borderBottomColor={selected ? "blue.500" : borderColor}
    
    >
      
    </Flex>
  );
};
export default TabItem;
