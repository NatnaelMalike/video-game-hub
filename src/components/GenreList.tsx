import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectGenreId = useGameQueryStore((s) => s.setSelectGenreId);

  if (isLoading) {
    return (
      <VStack py={10}>
        <Spinner color="gaming.accent" size="lg" />
      </VStack>
    );
  }

  return (
    <Box
      position="sticky"
      top="90px"
      maxH="calc(100vh - 120px)"
      overflowY="auto"
      pr={2}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#2a2a3a",
          borderRadius: "4px",
        },
      }}
    >
      <Heading
        fontSize="lg"
        fontFamily="heading"
        mb={4}
        color="gray.300"
        letterSpacing="wider"
        textTransform="uppercase"
      >
        Genres
      </Heading>
      <List spacing={1}>
        {data?.results.map((genre) => {
          const isSelected = genre.id === selectedGenreId;
          return (
            <ListItem key={genre.id}>
              <HStack
                as={Button}
                variant="ghost"
                w="100%"
                justifyContent="flex-start"
                spacing={3}
                py={2}
                px={2}
                borderRadius="lg"
                bg={isSelected ? "whiteAlpha.100" : "transparent"}
                borderLeft="3px solid"
                borderColor={isSelected ? "neon.cyan" : "transparent"}
                onClick={() => setSelectGenreId(genre.id)}
                _hover={{
                  bg: "whiteAlpha.100",
                  borderColor: isSelected ? "neon.cyan" : "gaming.accent",
                }}
                transition="all 0.2s"
              >
                <Image
                  boxSize="36px"
                  src={getCroppedImgUrl(genre.image_background)}
                  objectFit="cover"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor={isSelected ? "neon.cyan" : "gaming.border"}
                />
                <Box
                  fontSize="sm"
                  fontWeight={isSelected ? "600" : "400"}
                  color={isSelected ? "white" : "gray.300"}
                  textAlign="left"
                  noOfLines={1}
                >
                  {genre.name}
                </Box>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default GenreList;
