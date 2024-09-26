import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformMenu = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data } = usePlatform();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformMenu;
