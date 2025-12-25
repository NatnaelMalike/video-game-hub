import { Box, Heading, Text, Button, VStack, Icon } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsExclamationTriangle, BsHouseDoor } from "react-icons/bs";

const ErrorPage = () => {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error);

  return (
    <Box minH="100vh" bg="gaming.dark">
      <Navbar />
      <VStack py={20} spacing={6} textAlign="center" px={4}>
        <Icon as={BsExclamationTriangle} boxSize={16} color="neon.orange" />
        <Heading
          fontFamily="heading"
          fontSize={{ base: "4xl", md: "6xl" }}
          bgGradient="linear(to-r, neon.orange, neon.pink)"
          bgClip="text"
        >
          {isNotFound ? "404" : "Oops!"}
        </Heading>
        <Text fontSize="xl" color="gray.400" maxW="md">
          {isNotFound
            ? "The page you're looking for doesn't exist or has been moved."
            : "Sorry, an unexpected error has occurred."}
        </Text>
        <Button
          as={Link}
          to="/"
          leftIcon={<BsHouseDoor />}
          bg="gaming.accent"
          color="white"
          size="lg"
          borderRadius="xl"
          _hover={{
            bg: "gaming.accentHover",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
          }}
          transition="all 0.2s"
        >
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
