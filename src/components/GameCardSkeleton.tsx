import { Box, Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      bg="gaming.card"
      border="1px solid"
      borderColor="gaming.border"
      borderRadius="xl"
      overflow="hidden"
    >
      <Skeleton
        height="200px"
        startColor="gaming.card"
        endColor="gaming.border"
      />
      <CardBody p={4}>
        <Box mb={3}>
          <Skeleton
            height="16px"
            width="60%"
            startColor="gaming.card"
            endColor="gaming.border"
            borderRadius="md"
          />
        </Box>
        <SkeletonText
          noOfLines={2}
          spacing={2}
          startColor="gaming.card"
          endColor="gaming.border"
          skeletonHeight="20px"
        />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
