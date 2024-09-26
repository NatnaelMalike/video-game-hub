import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
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
                        <Button
                            variant="link"
                            onClick={() => {
                                onSelectGenre(genre);
                            }}
                            fontSize="lg">
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
