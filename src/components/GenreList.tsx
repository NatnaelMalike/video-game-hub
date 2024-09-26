import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
    const { data, loading } = useGenre();
    if (loading) return <Spinner />;
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="40px"
                            src={getCroppedImgUrl(genre.image_background)}
                            borderRadius={10}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
