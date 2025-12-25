import { Box, Skeleton } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) {
    return (
      <Skeleton
        height="300px"
        borderRadius="xl"
        startColor="gaming.card"
        endColor="gaming.border"
      />
    );
  }

  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gaming.border"
      boxShadow="0 10px 40px rgba(0, 0, 0, 0.3)"
      _hover={{
        borderColor: "gaming.accent",
        boxShadow: "0 10px 40px rgba(99, 102, 241, 0.2)",
      }}
      transition="all 0.3s"
    >
      <video
        src={first.data[480]}
        poster={first.preview}
        controls
        style={{
          width: "100%",
          display: "block",
          borderRadius: "12px",
        }}
      />
    </Box>
  );
};

export default GameTrailer;
