import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/");
    }
  };

  const handleClear = () => {
    setValue("");
    if (ref.current) {
      ref.current.value = "";
      ref.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <BsSearch color="#6366f1" />
        </InputLeftElement>
        <Input
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for games..."
          variant="filled"
          borderRadius="full"
          bg="gaming.card"
          border="1px solid"
          borderColor="gaming.border"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "gaming.cardHover",
            borderColor: "gaming.accent",
          }}
          _focus={{
            bg: "gaming.cardHover",
            borderColor: "neon.cyan",
            boxShadow: "0 0 15px rgba(0, 245, 255, 0.15)",
          }}
          fontSize="md"
          pr={value ? "40px" : "16px"}
        />
        {value && (
          <InputRightElement>
            <IconButton
              aria-label="Clear search"
              icon={<BsX size={20} />}
              size="sm"
              variant="ghost"
              borderRadius="full"
              onClick={handleClear}
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
