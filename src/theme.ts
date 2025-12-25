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
      cyan: "#00d4ff",
      purple: "#a855f7",
      pink: "#ec4899",
      green: "#10b981",
      orange: "#f97316",
      yellow: "#fbbf24",
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
    light: {
      bg: "#f8fafc",
      card: "#ffffff",
      cardHover: "#f1f5f9",
      border: "#e2e8f0",
      accent: "#6366f1",
      accentHover: "#4f46e5",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gaming.dark" : "light.bg",
        color: props.colorMode === "dark" ? "gray.100" : "gray.800",
      },
      "*::selection": {
        bg: props.colorMode === "dark" ? "neon.cyan" : "brand.200",
        color: props.colorMode === "dark" ? "gaming.dark" : "gray.900",
      },
    }),
  },
  components: {
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === "dark" ? "gaming.card" : "light.card",
          borderRadius: "xl",
          border: "1px solid",
          borderColor:
            props.colorMode === "dark" ? "gaming.border" : "light.border",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: props.colorMode === "dark" ? "none" : "sm",
          _hover: {
            borderColor:
              props.colorMode === "dark" ? "gaming.accent" : "light.accent",
            boxShadow:
              props.colorMode === "dark"
                ? "0 0 20px rgba(99, 102, 241, 0.3)"
                : "0 8px 30px rgba(99, 102, 241, 0.15)",
          },
        },
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        transition: "all 0.2s ease",
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "gaming.accent" : "light.accent",
          color: "white",
          _hover: {
            bg:
              props.colorMode === "dark"
                ? "gaming.accentHover"
                : "light.accentHover",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
          },
        }),
        ghost: (props: any) => ({
          _hover: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.50",
          },
        }),
        gaming: (props: any) => ({
          bg: "transparent",
          border: "1px solid",
          borderColor:
            props.colorMode === "dark" ? "gaming.accent" : "light.accent",
          color: props.colorMode === "dark" ? "gaming.accent" : "light.accent",
          _hover: {
            bg: props.colorMode === "dark" ? "gaming.accent" : "light.accent",
            color: "white",
            boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
          },
        }),
      },
    },
    Menu: {
      baseStyle: (props: any) => ({
        list: {
          bg: props.colorMode === "dark" ? "gaming.card" : "white",
          border: "1px solid",
          borderColor:
            props.colorMode === "dark" ? "gaming.border" : "light.border",
          borderRadius: "xl",
          boxShadow:
            props.colorMode === "dark"
              ? "0 10px 40px rgba(0, 0, 0, 0.5)"
              : "0 10px 40px rgba(0, 0, 0, 0.1)",
          py: 2,
        },
        item: {
          bg: "transparent",
          _hover: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.50",
          },
          _focus: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.50",
          },
        },
      }),
    },
    Input: {
      variants: {
        filled: (props: any) => ({
          field: {
            bg: props.colorMode === "dark" ? "gaming.card" : "white",
            border: "1px solid",
            borderColor:
              props.colorMode === "dark" ? "gaming.border" : "light.border",
            color: props.colorMode === "dark" ? "white" : "gray.800",
            _hover: {
              bg:
                props.colorMode === "dark"
                  ? "gaming.cardHover"
                  : "light.cardHover",
              borderColor:
                props.colorMode === "dark" ? "gaming.accent" : "light.accent",
            },
            _focus: {
              bg: props.colorMode === "dark" ? "gaming.cardHover" : "white",
              borderColor:
                props.colorMode === "dark" ? "neon.cyan" : "light.accent",
              boxShadow:
                props.colorMode === "dark"
                  ? "0 0 10px rgba(0, 245, 255, 0.2)"
                  : "0 0 10px rgba(99, 102, 241, 0.2)",
            },
          },
        }),
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
        startColor: "gray.100",
        endColor: "gray.200",
      },
    },
  },
  semanticTokens: {
    colors: {
      "card-bg": {
        default: "white",
        _dark: "gaming.card",
      },
      "card-border": {
        default: "light.border",
        _dark: "gaming.border",
      },
      "text-primary": {
        default: "gray.800",
        _dark: "gray.100",
      },
      "text-secondary": {
        default: "gray.600",
        _dark: "gray.400",
      },
      "text-muted": {
        default: "gray.500",
        _dark: "gray.500",
      },
    },
  },
});

export default theme;
