import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: {
    [key: string]: { icon: IconType; name: string; color: string };
  } = {
    pc: { icon: FaWindows, name: "PC", color: "#00a4ef" },
    xbox: { icon: FaXbox, name: "Xbox", color: "#107c10" },
    playstation: { icon: FaPlaystation, name: "PlayStation", color: "#003791" },
    mac: { icon: FaApple, name: "Mac", color: "#a2aaad" },
    nintendo: { icon: SiNintendo, name: "Nintendo", color: "#e60012" },
    web: { icon: BsGlobe, name: "Web", color: "#6366f1" },
    linux: { icon: FaLinux, name: "Linux", color: "#fcc624" },
    android: { icon: FaAndroid, name: "Android", color: "#3ddc84" },
    ios: { icon: MdPhoneIphone, name: "iOS", color: "#a2aaad" },
  };

  return (
    <HStack spacing={2}>
      {platforms.map((platform) => {
        const platformInfo = iconMap[platform.slug];
        if (!platformInfo) return null;

        return (
          <Tooltip
            key={platform.id}
            label={platformInfo.name}
            placement="top"
            bg="gaming.card"
            color="gray.100"
            borderRadius="md"
            fontSize="xs"
          >
            <span>
              <Icon
                as={platformInfo.icon}
                color="gray.400"
                boxSize={4}
                transition="all 0.2s"
                _hover={{
                  color: platformInfo.color,
                  transform: "scale(1.2)",
                }}
              />
            </span>
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
