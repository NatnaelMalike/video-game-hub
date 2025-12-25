import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box
      minH="100vh"
      bg="gaming.dark"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "400px",
        background:
          "linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, transparent 100%)",
        pointerEvents: "none",
      }}
    >
      <Navbar />
      <Box
        as="main"
        px={{ base: 4, md: 6, lg: 8 }}
        py={6}
        maxW="1800px"
        mx="auto"
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
