import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const getScoreStyle = () => {
    if (score >= 90) {
      return {
        bg: "transparent",
        color: "neon.green",
        borderColor: "neon.green",
        shadow: "0 0 10px rgba(0, 255, 136, 0.3)",
      };
    }
    if (score >= 75) {
      return {
        bg: "transparent",
        color: "neon.cyan",
        borderColor: "neon.cyan",
        shadow: "0 0 10px rgba(0, 245, 255, 0.3)",
      };
    }
    if (score >= 60) {
      return {
        bg: "transparent",
        color: "neon.yellow",
        borderColor: "neon.yellow",
        shadow: "0 0 10px rgba(255, 234, 0, 0.3)",
      };
    }
    return {
      bg: "transparent",
      color: "gray.400",
      borderColor: "gray.500",
      shadow: "none",
    };
  };

  const style = getScoreStyle();

  return (
    <Badge
      bg={style.bg}
      color={style.color}
      border="2px solid"
      borderColor={style.borderColor}
      boxShadow={style.shadow}
      fontSize="sm"
      fontWeight="bold"
      px={2}
      py={0.5}
      borderRadius="md"
      fontFamily="heading"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
