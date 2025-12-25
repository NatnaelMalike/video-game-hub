import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortMenu = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectOrder = useGameQueryStore((s) => s.setSelectOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

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
          Sort:
        </Box>
        {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList
        bg="gaming.card"
        border="1px solid"
        borderColor="gaming.border"
        borderRadius="xl"
        py={2}
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.5)"
      >
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => setSelectOrder(order.value)}
            bg="transparent"
            _hover={{ bg: "whiteAlpha.100" }}
            _focus={{ bg: "whiteAlpha.100" }}
            fontSize="sm"
            borderRadius="md"
            mx={2}
            w="auto"
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortMenu;
