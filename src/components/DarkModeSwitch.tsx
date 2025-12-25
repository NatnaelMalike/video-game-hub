import { HStack, IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <HStack>
      <Tooltip
        label={isDark ? "Light Mode" : "Dark Mode"}
        placement="bottom"
        bg="gaming.card"
        color="gray.100"
        borderRadius="md"
      >
        <IconButton
          aria-label="Toggle color mode"
          icon={isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
          onClick={toggleColorMode}
          variant="ghost"
          borderRadius="full"
          size="md"
          color={isDark ? "neon.yellow" : "gaming.accent"}
          _hover={{
            bg: "whiteAlpha.100",
            transform: "rotate(15deg)",
          }}
          transition="all 0.2s ease"
        />
      </Tooltip>
    </HStack>
  );
};

export default DarkModeSwitch;
