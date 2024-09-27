import {
    Button,
    Heading,
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
    selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, loading } = useGenre();
    if (loading) return <Spinner />;
    return (
        <>
        <Heading fontSize={'2xl'} marginBottom={5}>Genres</Heading>
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack spacing={3}>
                        <Image
                            boxSize="40px"
                            src={getCroppedImgUrl(genre.image_background)}
                            objectFit="cover"
                            borderRadius={10}
                        />
                        <Button
                            whiteSpace="normal"
                            textAlign="left"
                            fontWeight={
                                genre.id === selectedGenre?.id
                                ? "bold"
                                : "normal"
                            }
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
            </>
    );
};

export default GenreList;
