import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box role="group" h="100%">
      {children}
    </Box>
  );
};

export default GameCardContainer;
