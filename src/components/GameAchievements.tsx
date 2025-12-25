import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Progress,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsTrophy } from "react-icons/bs";
import useAchievements from "../hooks/useAchievements";

interface Props {
  gameId: number;
}

const GameAchievements = ({ gameId }: Props) => {
  const { data, isLoading } = useAchievements(gameId);

  if (isLoading) {
    return (
      <Box>
        <HStack mb={4} spacing={2}>
          <Icon as={BsTrophy} color="neon.yellow" boxSize={5} />
          <Heading fontSize="lg" fontFamily="heading">
            Achievements
          </Heading>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              h="80px"
              borderRadius="xl"
              startColor="gaming.card"
              endColor="gaming.border"
            />
          ))}
        </SimpleGrid>
      </Box>
    );
  }

  if (!data?.results?.length) return null;

  return (
    <Box>
      <HStack mb={4} spacing={2}>
        <Icon as={BsTrophy} color="neon.yellow" boxSize={5} />
        <Heading fontSize="lg" fontFamily="heading" color="white">
          Achievements
        </Heading>
        <Text fontSize="sm" color="gray.500">
          ({data.count} total)
        </Text>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {data.results.slice(0, 6).map((achievement) => (
          <HStack
            key={achievement.id}
            bg="gaming.card"
            border="1px solid"
            borderColor="gaming.border"
            borderRadius="xl"
            p={3}
            spacing={3}
            transition="all 0.2s"
            _hover={{
              borderColor: "neon.yellow",
              bg: "gaming.cardHover",
            }}
          >
            <Image
              src={achievement.image}
              alt={achievement.name}
              boxSize="50px"
              borderRadius="lg"
              objectFit="cover"
            />
            <VStack align="flex-start" spacing={1} flex={1}>
              <Text fontSize="sm" fontWeight="600" color="white" noOfLines={1}>
                {achievement.name}
              </Text>
              <Text fontSize="xs" color="gray.500" noOfLines={1}>
                {achievement.description}
              </Text>
              <HStack w="100%" spacing={2}>
                <Progress
                  value={parseFloat(achievement.percent)}
                  size="xs"
                  flex={1}
                  borderRadius="full"
                  bg="gaming.border"
                  sx={{
                    "& > div": {
                      bg: "neon.yellow",
                    },
                  }}
                />
                <Text fontSize="2xs" color="gray.500">
                  {achievement.percent}%
                </Text>
              </HStack>
            </VStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameAchievements;
