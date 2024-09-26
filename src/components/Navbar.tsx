import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import DarkModeSwitch from "./DarkModeSwitch"
import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <HStack  padding={'16px'}>
        <Image src={logo} boxSize={"64px"}/>
        <SearchInput/>
        <DarkModeSwitch/>
    </HStack>
  )
}

export default Navbar