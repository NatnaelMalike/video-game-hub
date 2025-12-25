import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) {
    return (
      <Text color="gray.300" lineHeight="1.8">
        {children}
      </Text>
    );
  }

  const text = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text color="gray.300" lineHeight="1.8">
      {text}
      <Button
        ml={2}
        size="xs"
        variant="ghost"
        color="neon.cyan"
        fontWeight="600"
        onClick={() => setExpanded(!expanded)}
        _hover={{
          bg: "whiteAlpha.100",
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
