import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
        <Navbar/>
        <Box padding={5}>

            <Heading className="text-2xl text-red-600 text-center">Oops...</Heading>
            <Text>
                {isRouteErrorResponse(error)
                    ? "The Page doesn't exist"
                    : "Sorry, an unexpected error has occurred."}
            </Text>
                    </Box>
        </>
    );
};

export default ErrorPage;
