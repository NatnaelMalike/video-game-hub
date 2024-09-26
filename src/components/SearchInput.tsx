import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input placeholder="Search games" variant='filled' borderRadius={25}/>
    </InputGroup>
  )
}

export default SearchInput