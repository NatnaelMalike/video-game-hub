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

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../entities/Platform";

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        mac: FaApple,
        nintendo: SiNintendo,
        web: BsGlobe,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
    };
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color={"gray.500"}>
                    {platform.name}
                </Icon>
            ))}
        </HStack>
    );
};

export default PlatformIconList;
