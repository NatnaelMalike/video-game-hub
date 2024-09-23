import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import DarkModeSwitch from "./DarkModeSwitch"

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'16px'}>
        <Image src={logo} boxSize={"64px"}/>
        <DarkModeSwitch/>
    </HStack>
  )
}

export default Navbar