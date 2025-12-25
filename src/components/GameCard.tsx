import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Badge,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import { BsCalendar3, BsClock, BsStarFill } from "react-icons/bs";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const formatDate = (dateStr: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link
      to={"/games/" + game.slug}
      style={{ display: "block", height: "100%" }}
    >
      <Card
        bg={isDark ? "gaming.card" : "white"}
        border="1px solid"
        borderColor={isDark ? "gaming.border" : "light.border"}
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.3s ease"
        boxShadow={isDark ? "none" : "sm"}
        _hover={{
          borderColor: isDark ? "gaming.accent" : "light.accent",
          transform: "translateY(-4px)",
          boxShadow: isDark
            ? "0 12px 40px rgba(99, 102, 241, 0.25)"
            : "0 12px 40px rgba(99, 102, 241, 0.15)",
          cursor: "pointer",
        }}
        h="100%"
        role="group"
      >
        <Box position="relative" overflow="hidden">
          <Image
            src={getCroppedImgUrl(game.background_image)}
            alt={game.name}
            w="100%"
            h="180px"
            objectFit="cover"
            transition="transform 0.4s ease"
            _groupHover={{ transform: "scale(1.08)" }}
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h="80px"
            bgGradient={
              isDark
                ? "linear(to-t, gaming.card, transparent)"
                : "linear(to-t, white, transparent)"
            }
          />

          {/* Rating Badge */}
          {game.rating > 0 && (
            <HStack
              position="absolute"
              top={3}
              left={3}
              bg={isDark ? "blackAlpha.700" : "whiteAlpha.900"}
              backdropFilter="blur(8px)"
              px={2}
              py={1}
              borderRadius="md"
              spacing={1}
            >
              <Icon as={BsStarFill} color="neon.yellow" boxSize={3} />
              <Text
                fontSize="xs"
                fontWeight="bold"
                color={isDark ? "white" : "gray.800"}
              >
                {game.rating.toFixed(1)}
              </Text>
            </HStack>
          )}

          {/* Metacritic Badge */}
          {game.metacritic && (
            <Box position="absolute" top={3} right={3}>
              <CriticScore score={game.metacritic} />
            </Box>
          )}
        </Box>

        <CardBody p={4}>
          <VStack align="stretch" spacing={3}>
            {/* Platforms */}
            <HStack justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms?.map((p) => p.platform) || []}
              />
              <Emoji rating={game.rating_top} />
            </HStack>

            {/* Title */}
            <Heading
              size="md"
              fontFamily="heading"
              fontWeight="600"
              lineHeight="1.3"
              noOfLines={2}
              color={isDark ? "white" : "gray.800"}
              transition="color 0.2s"
              _groupHover={{ color: isDark ? "neon.cyan" : "brand.500" }}
            >
              {game.name}
            </Heading>

            {/* Genres */}
            {game.genres && game.genres.length > 0 && (
              <Flex flexWrap="wrap" gap={1}>
                {game.genres.slice(0, 3).map((genre) => (
                  <Badge
                    key={genre.id}
                    bg={isDark ? "whiteAlpha.100" : "blackAlpha.100"}
                    color={isDark ? "gray.400" : "gray.600"}
                    fontSize="2xs"
                    px={2}
                    py={0.5}
                    borderRadius="full"
                    fontWeight="500"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </Flex>
            )}

            {/* Meta Info */}
            <HStack
              spacing={4}
              fontSize="xs"
              color={isDark ? "gray.500" : "gray.600"}
            >
              {game.released && (
                <HStack spacing={1}>
                  <Icon as={BsCalendar3} boxSize={3} />
                  <Text>{formatDate(game.released)}</Text>
                </HStack>
              )}
              {game.playtime > 0 && (
                <HStack spacing={1}>
                  <Icon as={BsClock} boxSize={3} />
                  <Text>{game.playtime}h</Text>
                </HStack>
              )}
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
