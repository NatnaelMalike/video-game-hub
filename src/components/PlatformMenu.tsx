import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformMenu = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data } = usePlatform();
  const platform = data.results.find((platform)=> platform.id === selectedPlatformId)

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
