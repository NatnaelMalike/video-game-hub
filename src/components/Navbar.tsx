import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack padding={"16px"}>
            <Image src={logo} boxSize={"64px"} />
            <SearchInput onSearch={onSearch} />
            <DarkModeSwitch />
        </HStack>
    );
};

export default Navbar;
