import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
    const { data, isLoading } = useGenres();
    if (isLoading) return <Spinner />;
    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={5}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
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
                                    genre.id === selectedGenreId
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
