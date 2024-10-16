import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={"16px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"64px"} objectFit={'cover'}/>
      </Link>
      <SearchInput />
      <DarkModeSwitch />
    </HStack>
  );
};

export default Navbar;
