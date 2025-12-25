import { Box, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsHeart,
  BsController,
} from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      as="footer"
      mt={16}
      py={8}
      borderTop="1px solid"
      borderColor="gaming.border"
    >
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link
            href="https://rawg.io"
            isExternal
            color="gray.500"
            _hover={{ color: "neon.cyan" }}
          >
            <HStack spacing={2}>
              <Icon as={BsController} boxSize={5} />
              <Text fontSize="sm">Powered by RAWG</Text>
            </HStack>
          </Link>
        </HStack>

        <HStack spacing={4}>
          <Link
            href="https://github.com"
            isExternal
            color="gray.500"
            _hover={{ color: "white" }}
          >
            <Icon as={BsGithub} boxSize={5} />
          </Link>
          <Link
            href="https://linkedin.com"
            isExternal
            color="gray.500"
            _hover={{ color: "#0077b5" }}
          >
            <Icon as={BsLinkedin} boxSize={5} />
          </Link>
          <Link
            href="https://twitter.com"
            isExternal
            color="gray.500"
            _hover={{ color: "#1da1f2" }}
          >
            <Icon as={BsTwitter} boxSize={5} />
          </Link>
        </HStack>

        <HStack fontSize="sm" color="gray.600" spacing={1}>
          <Text>Made with</Text>
          <Icon as={BsHeart} color="red.400" />
          <Text>using React & Chakra UI</Text>
        </HStack>

        <Text fontSize="xs" color="gray.600">
          © {new Date().getFullYear()} GameVault. All game data from RAWG API.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
