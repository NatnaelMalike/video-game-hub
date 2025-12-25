import { SimpleGrid, Text, HStack, Badge } from "@chakra-ui/react";
import Game from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={4} as="dl">
      <DefinitionItem term="Platforms">
        <HStack flexWrap="wrap" spacing={2}>
          {game.parent_platforms?.map(({ platform }) => (
            <Badge
              key={platform.id}
              bg="whiteAlpha.100"
              color="gray.300"
              fontSize="xs"
              px={2}
              py={1}
              borderRadius="md"
            >
              {platform.name}
            </Badge>
          ))}
        </HStack>
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        {game.metacritic ? (
          <CriticScore score={game.metacritic} />
        ) : (
          <Text color="gray.500">N/A</Text>
        )}
      </DefinitionItem>

      <DefinitionItem term="Genres">
        <HStack flexWrap="wrap" spacing={2}>
          {game.genres?.map((genre) => (
            <Badge
              key={genre.id}
              bg="gaming.accent"
              color="white"
              fontSize="xs"
              px={2}
              py={1}
              borderRadius="md"
            >
              {genre.name}
            </Badge>
          ))}
        </HStack>
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher, index) => (
          <Text key={publisher.id} as="span">
            {publisher.name}
            {index < game.publishers.length - 1 && ", "}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
