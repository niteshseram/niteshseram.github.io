const dark = {
  bg: "#07111A",
  primary: "#3C096C",
  secondary: "#0096c7",
  text: {
    primary: "#fff",
    secondary: "#afa3a3",
    tertiary: "#fff",
  },
  bubble: "#0F1624",
  buttonShadow1: "black",
  buttonShadow2: "#49127c",
  footer: "#03090f",
};

const defaultTheme = {
  // Temp fonts
  fonts: {
    title: "Roboto, sans-serif",
    main: "Roboto, sans-serif",
    fira: "Fira Code, sans-serif",
  },
  // Breakpoints for responsive design
  breakpoints: {
    xs: "screen and (max-width: 480px)",
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export const darkTheme = { ...defaultTheme, ...dark };
