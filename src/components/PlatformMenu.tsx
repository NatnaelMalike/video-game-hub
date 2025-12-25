import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformMenu = () => {
  const { data } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectPlatformId = useGameQueryStore((s) => s.setSelectPlatformId);
  const platform = usePlatform(platformId);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        bg="gaming.card"
        border="1px solid"
        borderColor="gaming.border"
        borderRadius="xl"
        px={4}
        py={2}
        fontWeight="500"
        fontSize="sm"
        _hover={{
          bg: "gaming.cardHover",
          borderColor: "gaming.accent",
        }}
        _active={{
          bg: "gaming.cardHover",
        }}
      >
        <Box as="span" color="gray.500" mr={2}>
          Platform:
        </Box>
        {platform?.name || "All"}
      </MenuButton>
      <MenuList
        bg="gaming.card"
        border="1px solid"
        borderColor="gaming.border"
        borderRadius="xl"
        py={2}
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.5)"
      >
        {data?.results.map((p) => (
          <MenuItem
            key={p.id}
            onClick={() => setSelectPlatformId(p.id)}
            bg="transparent"
            _hover={{ bg: "whiteAlpha.100" }}
            _focus={{ bg: "whiteAlpha.100" }}
            fontSize="sm"
            borderRadius="md"
            mx={2}
            w="auto"
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
