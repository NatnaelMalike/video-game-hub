import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Badge,
  Button,
  Icon,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPlayFill, BsStarFill, BsCalendar3 } from "react-icons/bs";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  game: Game;
  isLoading?: boolean;
}

const FeaturedGame = ({ game, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Box
        borderRadius="2xl"
        overflow="hidden"
        h={{ base: "400px", md: "450px" }}
      >
        <Skeleton h="100%" startColor="gaming.card" endColor="gaming.border" />
      </Box>
    );
  }

  if (!game) return null;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      h={{ base: "400px", md: "450px" }}
      border="1px solid"
      borderColor="gaming.border"
      _hover={{
        borderColor: "gaming.accent",
        boxShadow: "0 20px 60px rgba(99, 102, 241, 0.2)",
      }}
      transition="all 0.3s"
    >
      {/* Background Image */}
      <Image
        src={getCroppedImgUrl(game.background_image)}
        alt={game.name}
        w="100%"
        h="100%"
        objectFit="cover"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, gaming.dark 0%, transparent 40%, transparent 60%, rgba(10,10,15,0.5) 100%)"
      />

      {/* Content */}
      <VStack
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={{ base: 5, md: 8 }}
        align="flex-start"
        spacing={4}
      >
        {/* Badges */}
        <HStack spacing={2} flexWrap="wrap">
          <Badge
            bg="gaming.accent"
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
          >
            FEATURED
          </Badge>
          {game.metacritic && (
            <Badge
              bg="neon.green"
              color="gaming.dark"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="bold"
            >
              {game.metacritic} METASCORE
            </Badge>
          )}
        </HStack>

        {/* Title */}
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontFamily="heading"
          fontWeight="800"
          color="white"
          textShadow="0 2px 10px rgba(0,0,0,0.5)"
          lineHeight="1.1"
        >
          {game.name}
        </Heading>

        {/* Meta Info */}
        <HStack spacing={4} color="gray.300" fontSize="sm" flexWrap="wrap">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) || []}
          />
          {game.rating > 0 && (
            <HStack spacing={1}>
              <Icon as={BsStarFill} color="neon.yellow" />
              <Text fontWeight="600">{game.rating.toFixed(1)}</Text>
            </HStack>
          )}
          {game.released && (
            <HStack spacing={1}>
              <Icon as={BsCalendar3} />
              <Text>{formatDate(game.released)}</Text>
            </HStack>
          )}
        </HStack>

        {/* Genres */}
        <Flex gap={2} flexWrap="wrap">
          {game.genres?.slice(0, 4).map((genre) => (
            <Badge
              key={genre.id}
              bg="whiteAlpha.200"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
            >
              {genre.name}
            </Badge>
          ))}
        </Flex>

        {/* CTA Button */}
        <Button
          as={Link}
          to={`/games/${game.slug}`}
          leftIcon={<BsPlayFill size={20} />}
          bg="white"
          color="gaming.dark"
          size="lg"
          borderRadius="full"
          fontWeight="bold"
          _hover={{
            bg: "neon.cyan",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(0, 245, 255, 0.4)",
          }}
          transition="all 0.2s"
        >
          View Details
        </Button>
      </VStack>
    </Box>
  );
};

export default FeaturedGame;
