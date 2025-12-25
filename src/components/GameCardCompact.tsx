import { Box, HStack, Image, Text, VStack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import Game from "../entities/Game";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  game: Game;
  rank?: number;
}

const GameCardCompact = ({ game, rank }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <HStack
        bg="gaming.card"
        border="1px solid"
        borderColor="gaming.border"
        borderRadius="xl"
        p={3}
        spacing={3}
        transition="all 0.2s"
        _hover={{
          bg: "gaming.cardHover",
          borderColor: "gaming.accent",
          transform: "translateX(4px)",
        }}
      >
        {/* Rank Number */}
        {rank && (
          <Text
            fontSize="2xl"
            fontFamily="heading"
            fontWeight="800"
            color="gaming.accent"
            minW="30px"
          >
            {rank}
          </Text>
        )}

        {/* Game Image */}
        <Image
          src={getCroppedImgUrl(game.background_image)}
          alt={game.name}
          boxSize="60px"
          objectFit="cover"
          borderRadius="lg"
        />

        {/* Game Info */}
        <VStack align="flex-start" spacing={0} flex={1}>
          <Text fontWeight="600" fontSize="sm" noOfLines={1} color="white">
            {game.name}
          </Text>
          <HStack spacing={3} fontSize="xs" color="gray.500">
            {game.rating > 0 && (
              <HStack spacing={1}>
                <Icon as={BsStarFill} color="neon.yellow" boxSize={3} />
                <Text>{game.rating.toFixed(1)}</Text>
              </HStack>
            )}
            {game.genres?.[0] && <Text>{game.genres[0].name}</Text>}
          </HStack>
        </VStack>

        {/* Metacritic */}
        {game.metacritic && (
          <Box
            bg={
              game.metacritic >= 75
                ? "neon.green"
                : game.metacritic >= 60
                ? "neon.yellow"
                : "gray.500"
            }
            color="gaming.dark"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="bold"
          >
            {game.metacritic}
          </Box>
        )}
      </HStack>
    </Link>
  );
};

export default GameCardCompact;
