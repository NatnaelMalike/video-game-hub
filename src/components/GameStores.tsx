import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsCart3, BsSteam } from "react-icons/bs";
import {
  SiPlaystation,
  SiXbox,
  SiNintendoswitch,
  SiEpicgames,
  SiGogdotcom,
  SiItchdotio,
} from "react-icons/si";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { IconType } from "react-icons";
import { GameStore } from "../entities/Game";

interface Props {
  stores: GameStore[];
}

const storeInfo: Record<
  string,
  { icon: IconType; color: string; name: string }
> = {
  steam: { icon: BsSteam, color: "#1b2838", name: "Steam" },
  playstation: { icon: SiPlaystation, color: "#003791", name: "PlayStation" },
  xbox: { icon: SiXbox, color: "#107c10", name: "Xbox" },
  "xbox-store": { icon: SiXbox, color: "#107c10", name: "Xbox Store" },
  nintendo: { icon: SiNintendoswitch, color: "#e60012", name: "Nintendo" },
  "epic-games": { icon: SiEpicgames, color: "#2f2d2e", name: "Epic Games" },
  gog: { icon: SiGogdotcom, color: "#86328a", name: "GOG" },
  "itch-io": { icon: SiItchdotio, color: "#fa5c5c", name: "itch.io" },
  "apple-appstore": { icon: FaApple, color: "#000000", name: "App Store" },
  "google-play": { icon: FaGooglePlay, color: "#3bccff", name: "Google Play" },
};

const GameStores = ({ stores }: Props) => {
  if (!stores?.length) return null;

  return (
    <Box>
      <HStack mb={4} spacing={2}>
        <Icon as={BsCart3} color="neon.green" boxSize={5} />
        <Heading fontSize="lg" fontFamily="heading" color="white">
          Where to Buy
        </Heading>
      </HStack>

      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
        {stores.map((gameStore) => {
          const info = storeInfo[gameStore.store.slug] || {
            icon: BsCart3,
            color: "#6366f1",
            name: gameStore.store.name,
          };

          return (
            <Button
              key={gameStore.id}
              as="a"
              href={gameStore.url || `https://${gameStore.store.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<Icon as={info.icon} />}
              bg="gaming.card"
              border="1px solid"
              borderColor="gaming.border"
              color="white"
              size="md"
              borderRadius="xl"
              justifyContent="flex-start"
              _hover={{
                bg: info.color,
                borderColor: info.color,
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              {info.name}
            </Button>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default GameStores;
