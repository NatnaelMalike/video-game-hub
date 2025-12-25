import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    gray: {
      50: "#f7f7f8",
      100: "#e8e8ea",
      200: "#d1d1d6",
      300: "#a9a9b2",
      400: "#76767f",
      500: "#5c5c66",
      600: "#4a4a52",
      700: "#2d2d33",
      800: "#1a1a1f",
      900: "#0d0d10",
    },
    brand: {
      50: "#e6f7ff",
      100: "#b3e7ff",
      200: "#80d4ff",
      300: "#4dc1ff",
      400: "#1aadff",
      500: "#0099e6",
      600: "#0077b3",
      700: "#005580",
      800: "#00334d",
      900: "#00111a",
    },
    neon: {
      cyan: "#00f5ff",
      purple: "#bf00ff",
      pink: "#ff00aa",
      green: "#00ff88",
      orange: "#ff6b00",
      yellow: "#ffea00",
    },
    gaming: {
      dark: "#0a0a0f",
      darker: "#050508",
      card: "#12121a",
      cardHover: "#1a1a25",
      border: "#2a2a3a",
      accent: "#6366f1",
      accentHover: "#818cf8",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gaming.dark",
        color: "gray.100",
      },
      "*::selection": {
        bg: "neon.cyan",
        color: "gaming.dark",
      },
    },
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          bg: "gaming.card",
          borderRadius: "xl",
          border: "1px solid",
          borderColor: "gaming.border",
          overflow: "hidden",
          transition: "all 0.3s ease",
          _hover: {
            borderColor: "gaming.accent",
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        transition: "all 0.2s ease",
      },
      variants: {
        solid: {
          bg: "gaming.accent",
          color: "white",
          _hover: {
            bg: "gaming.accentHover",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
          },
        },
        ghost: {
          _hover: {
            bg: "whiteAlpha.100",
          },
        },
        gaming: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "gaming.accent",
          color: "gaming.accent",
          _hover: {
            bg: "gaming.accent",
            color: "white",
            boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
          },
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: "gaming.card",
          border: "1px solid",
          borderColor: "gaming.border",
          borderRadius: "xl",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
          py: 2,
        },
        item: {
          bg: "transparent",
          _hover: {
            bg: "whiteAlpha.100",
          },
          _focus: {
            bg: "whiteAlpha.100",
          },
        },
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bg: "gaming.card",
            border: "1px solid",
            borderColor: "gaming.border",
            _hover: {
              bg: "gaming.cardHover",
              borderColor: "gaming.accent",
            },
            _focus: {
              bg: "gaming.cardHover",
              borderColor: "neon.cyan",
              boxShadow: "0 0 10px rgba(0, 245, 255, 0.2)",
            },
          },
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "-0.02em",
      },
    },
    Skeleton: {
      baseStyle: {
        borderRadius: "lg",
      },
      defaultProps: {
        startColor: "gaming.card",
        endColor: "gaming.border",
      },
    },
  },
});

export default theme;
