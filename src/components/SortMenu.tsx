import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortMenu = () => {
    const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
    const setSelectOrder = useGameQueryStore((s) => s.setSelectOrder);
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];
    const currenrSortOrder = sortOrders.find(
        (order) => order.value === sortOrder
    );
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {currenrSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        onClick={() => setSelectOrder(order.value)}
                        key={order.value}
                        value={order.value}>
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortMenu;
