import {
  Box,
  Heading,
  HStack,
  Icon,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsStarFill, BsBarChart } from "react-icons/bs";
import { Rating } from "../entities/Game";

interface Props {
  ratings: Rating[];
  rating: number;
  ratingsCount: number;
}

const ratingColors: Record<string, string> = {
  exceptional: "#00ff88",
  recommended: "#00f5ff",
  meh: "#ffea00",
  skip: "#ff6b6b",
};

const GameRatings = ({ ratings, rating, ratingsCount }: Props) => {
  if (!ratings?.length) return null;

  return (
    <Box
      bg="gaming.card"
      border="1px solid"
      borderColor="gaming.border"
      borderRadius="xl"
      p={5}
    >
      <HStack mb={4} spacing={2}>
        <Icon as={BsBarChart} color="gaming.accent" boxSize={5} />
        <Heading fontSize="lg" fontFamily="heading" color="white">
          Ratings
        </Heading>
      </HStack>

      {/* Overall Rating */}
      <HStack mb={5} spacing={4}>
        <VStack bg="gaming.border" borderRadius="xl" p={4} minW="100px">
          <HStack spacing={1}>
            <Icon as={BsStarFill} color="neon.yellow" boxSize={6} />
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="800"
              color="white"
            >
              {rating.toFixed(1)}
            </Text>
          </HStack>
          <Text fontSize="xs" color="gray.500">
            {ratingsCount.toLocaleString()} ratings
          </Text>
        </VStack>

        <VStack flex={1} align="stretch" spacing={2}>
          {ratings.map((r) => (
            <HStack key={r.id} spacing={3}>
              <Text
                fontSize="xs"
                color="gray.400"
                minW="80px"
                textTransform="capitalize"
              >
                {r.title}
              </Text>
              <Progress
                value={r.percent}
                flex={1}
                size="sm"
                borderRadius="full"
                bg="gaming.border"
                sx={{
                  "& > div": {
                    bg: ratingColors[r.title] || "gaming.accent",
                  },
                }}
              />
              <Text fontSize="xs" color="gray.500" minW="40px">
                {r.percent.toFixed(0)}%
              </Text>
            </HStack>
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};

export default GameRatings;
