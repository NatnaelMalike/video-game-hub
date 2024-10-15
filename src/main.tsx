import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
const queryClient  = new QueryClient()
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={queryClient}>
            {/* <App /> */}
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        </ChakraProvider>
    </StrictMode>
);
