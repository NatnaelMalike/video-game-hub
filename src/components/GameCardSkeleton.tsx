import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card width='350px' borderRadius={10} overflow={"hidden"}>
            <Skeleton height='250px'></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;
