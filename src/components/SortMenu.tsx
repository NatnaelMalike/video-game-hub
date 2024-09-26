import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortMenu = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Date</MenuItem>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Rank</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortMenu;
