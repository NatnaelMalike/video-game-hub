import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";


interface Props {
    children: ReactNode;
    slug: string;
}
const GameCardContainer = ({ children, slug }: Props) => {
    return (
        <Box
            borderRadius={10}
            overflow={"hidden"}
            _hover={{ transform: "scale(1.03)", transition: ".2s" }}
          >
            {children}
        </Box>
    );
};

export default GameCardContainer;
