import { Box, Image, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mt={4}>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton
            key={i}
            height="150px"
            borderRadius="xl"
            startColor="gaming.card"
            endColor="gaming.border"
          />
        ))}
      </SimpleGrid>
    );
  }

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mt={4}>
      {data?.results.map((screenshot) => (
        <Box
          key={screenshot.id}
          borderRadius="xl"
          overflow="hidden"
          border="1px solid"
          borderColor="gaming.border"
          transition="all 0.3s"
          _hover={{
            borderColor: "gaming.accent",
            transform: "scale(1.02)",
            boxShadow: "0 8px 30px rgba(99, 102, 241, 0.2)",
          }}
        >
          <Image
            src={screenshot.image}
            alt="Game screenshot"
            w="100%"
            h="150px"
            objectFit="cover"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
