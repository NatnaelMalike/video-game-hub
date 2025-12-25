import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box mb={4}>
      <Text
        as="dt"
        color="gray.500"
        fontSize="xs"
        fontWeight="600"
        textTransform="uppercase"
        letterSpacing="wider"
        mb={1}
      >
        {term}
      </Text>
      <Box as="dd" color="gray.200" fontSize="sm">
        {children}
      </Box>
    </Box>
  );
};

export default DefinitionItem;
