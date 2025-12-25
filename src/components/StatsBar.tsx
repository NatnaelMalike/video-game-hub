import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { BsController, BsCollection, BsPeople, BsGlobe } from "react-icons/bs";

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

const StatItem = ({ icon, label, value, color }: StatItemProps) => (
  <HStack
    bg="gaming.card"
    border="1px solid"
    borderColor="gaming.border"
    borderRadius="xl"
    px={4}
    py={3}
    spacing={3}
    flex={1}
    minW="150px"
  >
    <Box p={2} borderRadius="lg" bg={`${color}20`}>
      <Icon as={icon} color={color} boxSize={5} />
    </Box>
    <VStack align="flex-start" spacing={0}>
      <Text fontSize="lg" fontWeight="bold" fontFamily="heading" color="white">
        {value}
      </Text>
      <Text fontSize="xs" color="gray.500">
        {label}
      </Text>
    </VStack>
  </HStack>
);

const StatsBar = () => {
  return (
    <HStack
      spacing={4}
      overflowX="auto"
      pb={2}
      css={{
        "&::-webkit-scrollbar": {
          height: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#2a2a3a",
          borderRadius: "4px",
        },
      }}
    >
      <StatItem
        icon={BsController}
        label="Total Games"
        value="850K+"
        color="#00f5ff"
      />
      <StatItem
        icon={BsCollection}
        label="Genres"
        value="50+"
        color="#bf00ff"
      />
      <StatItem
        icon={BsPeople}
        label="Developers"
        value="100K+"
        color="#00ff88"
      />
      <StatItem icon={BsGlobe} label="Platforms" value="50+" color="#ff6b00" />
    </HStack>
  );
};

export default StatsBar;
