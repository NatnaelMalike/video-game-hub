import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenre from '../hooks/useGenres'
import usePlatform from '../hooks/usePlatforms'

interface Props{
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
  const {data: genres} = useGenre()
  const {data: platforms}  =usePlatform()
  const genre = genres.results.find((genre)=> genre.id === gameQuery.genreId)
  const platform = platforms.results.find((platform)=> platform.id === gameQuery.platformId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <div>
        <Heading as={'h1'} marginY={5} fontSize={'5xl'}>{heading}</Heading>
    </div>
  )
}

export default GameHeading