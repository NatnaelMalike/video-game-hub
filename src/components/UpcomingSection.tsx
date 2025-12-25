import {
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Skeleton,
  Text,
  Image,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { BsCalendarEvent, BsCalendar3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import useUpcomingGames from "../hooks/useUpcomingGames";
import getCroppedImgUrl from "../services/image-url";

const UpcomingSection = () => {
  const { data, isLoading } = useUpcomingGames();

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "TBA";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDaysUntil = (dateStr: string) => {
    if (!dateStr) return null;
    const releaseDate = new Date(dateStr);
    const today = new Date();
    const diffTime = releaseDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : null;
  };

  return (
    <Box>
      <HStack mb={5} spacing={2}>
        <Icon as={BsCalendarEvent} color="neon.purple" boxSize={5} />
        <Heading
          fontSize="xl"
          fontFamily="heading"
          fontWeight="700"
          color="white"
        >
          Coming Soon
        </Heading>
      </HStack>

      <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                h="200px"
                borderRadius="xl"
                startColor="gaming.card"
                endColor="gaming.border"
              />
            ))
          : data?.results.map((game) => {
              const daysUntil = getDaysUntil(game.released);
              return (
                <Link key={game.id} to={`/games/${game.slug}`}>
                  <Box
                    position="relative"
                    borderRadius="xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="gaming.border"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: "neon.purple",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 30px rgba(191, 0, 255, 0.2)",
                    }}
                  >
                    <Image
                      src={getCroppedImgUrl(game.background_image)}
                      alt={game.name}
                      w="100%"
                      h="150px"
                      objectFit="cover"
                    />
                    <Box
                      position="absolute"
                      inset={0}
                      bgGradient="linear(to-t, gaming.dark 20%, transparent 60%)"
                    />

                    {/* Days Until Badge */}
                    {daysUntil && (
                      <Badge
                        position="absolute"
                        top={2}
                        right={2}
                        bg="neon.purple"
                        color="white"
                        px={2}
                        py={1}
                        borderRadius="md"
                        fontSize="2xs"
                        fontWeight="bold"
                      >
                        {daysUntil}d
                      </Badge>
                    )}

                    <VStack
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      p={3}
                      align="flex-start"
                      spacing={1}
                    >
                      <Text
                        fontSize="sm"
                        fontWeight="600"
                        color="white"
                        noOfLines={2}
                        lineHeight="1.2"
                      >
                        {game.name}
                      </Text>
                      <HStack spacing={1} fontSize="2xs" color="gray.400">
                        <Icon as={BsCalendar3} />
                        <Text>{formatDate(game.released)}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                </Link>
              );
            })}
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingSection;
