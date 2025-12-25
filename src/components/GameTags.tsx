import { Badge, Box, Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { BsTags } from "react-icons/bs";
import { Tag } from "../entities/Game";

interface Props {
  tags: Tag[];
}

const GameTags = ({ tags }: Props) => {
  if (!tags?.length) return null;

  return (
    <Box>
      <HStack mb={3} spacing={2}>
        <Icon as={BsTags} color="neon.pink" boxSize={4} />
        <Heading fontSize="sm" fontFamily="heading" color="gray.400">
          Tags
        </Heading>
      </HStack>

      <Flex flexWrap="wrap" gap={2}>
        {tags.slice(0, 12).map((tag) => (
          <Badge
            key={tag.id}
            bg="whiteAlpha.100"
            color="gray.300"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="500"
            transition="all 0.2s"
            cursor="pointer"
            _hover={{
              bg: "gaming.accent",
              color: "white",
            }}
          >
            {tag.name}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};

export default GameTags;
