import { Box, Heading, Text, HStack, useColorMode } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import { BsController } from "react-icons/bs";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const platformName = platform?.name || "";
  const genreName = genre?.name || "";
  const heading = `${platformName} ${genreName} Games`.trim();

  return (
    <Box mb={6}>
      <HStack spacing={3} mb={2}>
        <Box
          p={2}
          borderRadius="lg"
          bg={isDark ? "gaming.accent" : "light.accent"}
          color="white"
        >
          <BsController size={20} />
        </Box>
        <Text
          fontSize="sm"
          color={isDark ? "gray.500" : "gray.600"}
          fontWeight="500"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          Browse Collection
        </Text>
      </HStack>
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontFamily="heading"
        fontWeight="800"
        bgGradient={
          isDark
            ? "linear(to-r, white, gray.300)"
            : "linear(to-r, gray.800, gray.600)"
        }
        bgClip="text"
        lineHeight="1.1"
      >
        {heading || "All Games"}
      </Heading>
    </Box>
  );
};

export default GameHeading;
