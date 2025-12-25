import { Box, HStack, Image, Text, Flex, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      bg={isDark ? "rgba(10, 10, 15, 0.85)" : "rgba(255, 255, 255, 0.85)"}
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor={isDark ? "gaming.border" : "light.border"}
      boxShadow={isDark ? "none" : "sm"}
    >
      <Flex
        maxW="1800px"
        mx="auto"
        px={{ base: 4, md: 6, lg: 8 }}
        py={4}
        align="center"
        justify="space-between"
        gap={4}
      >
        <Link to="/">
          <HStack
            spacing={3}
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.2s"
          >
            <Image
              src={logo}
              boxSize={{ base: "40px", md: "50px" }}
              objectFit="cover"
              borderRadius="lg"
            />
            <Text
              display={{ base: "none", md: "block" }}
              fontSize="xl"
              fontFamily="heading"
              fontWeight="bold"
              bgGradient={
                isDark
                  ? "linear(to-r, neon.cyan, gaming.accent)"
                  : "linear(to-r, brand.500, light.accent)"
              }
              bgClip="text"
              letterSpacing="wider"
            >
              GAMEVAULT
            </Text>
          </HStack>
        </Link>

        <Box flex={1} maxW="600px" mx={4}>
          <SearchInput />
        </Box>

        <DarkModeSwitch />
      </Flex>
    </Box>
  );
};

export default Navbar;
