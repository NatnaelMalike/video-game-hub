import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectGenreId = useGameQueryStore((s) => s.setSelectGenreId);
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
                                    setSelectGenreId(genre.id);
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
