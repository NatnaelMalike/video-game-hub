import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformMenu = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data } = usePlatforms();
    const platform = usePlatform(selectedPlatformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {platform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
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
