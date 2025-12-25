import { Box, Heading, HStack, Icon, Skeleton, VStack } from "@chakra-ui/react";
import { BsFire } from "react-icons/bs";
import { useRef, useState } from "react";
import useTrendingGames from "../hooks/useTrendingGames";
import GameCardCompact from "./GameCardCompact";

const TrendingSection = () => {
  const { data, isLoading } = useTrendingGames();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    setIsHovering(true);
    if (scrollRef.current && !scrollIntervalRef.current) {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

          // If reached bottom, scroll back to top
          if (scrollTop + clientHeight >= scrollHeight - 5) {
            scrollRef.current.scrollTop = 0;
          } else {
            scrollRef.current.scrollTop += 1;
          }
        }
      }, 30);
    }
  };

  const stopAutoScroll = () => {
    setIsHovering(false);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  return (
    <Box
      bg="gaming.card"
      border="1px solid"
      borderColor="gaming.border"
      borderRadius="2xl"
      p={5}
      onMouseEnter={startAutoScroll}
      onMouseLeave={stopAutoScroll}
    >
      <HStack mb={4} spacing={2}>
        <Icon as={BsFire} color="neon.orange" boxSize={5} />
        <Heading
          fontSize="lg"
          fontFamily="heading"
          fontWeight="700"
          color="white"
        >
          Trending Now
        </Heading>
      </HStack>

      <VStack
        ref={scrollRef}
        spacing={3}
        align="stretch"
        maxH="500px"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2a2a3a",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#6366f1",
          },
          scrollBehavior: isHovering ? "auto" : "smooth",
        }}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                h="76px"
                borderRadius="xl"
                startColor="gaming.card"
                endColor="gaming.border"
              />
            ))
          : data?.results
              .slice(0, 10)
              .map((game, index) => (
                <GameCardCompact key={game.id} game={game} rank={index + 1} />
              ))}
      </VStack>
    </Box>
  );
};

export default TrendingSection;
