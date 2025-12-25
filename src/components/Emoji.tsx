import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps, Tooltip } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps & { tooltip: string } } = {
    3: { src: meh, alt: "meh", boxSize: "20px", tooltip: "Meh" },
    4: {
      src: thumbsUp,
      alt: "recommended",
      boxSize: "20px",
      tooltip: "Recommended",
    },
    5: {
      src: bullsEye,
      alt: "exceptional",
      boxSize: "28px",
      tooltip: "Exceptional",
    },
  };

  const emoji = emojiMap[rating];
  if (!emoji) return null;

  return (
    <Tooltip
      label={emoji.tooltip}
      placement="top"
      bg="gaming.card"
      color="gray.100"
      borderRadius="md"
      fontSize="xs"
    >
      <Image
        src={emoji.src}
        alt={emoji.alt}
        boxSize={emoji.boxSize}
        filter="drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))"
      />
    </Tooltip>
  );
};

export default Emoji;
