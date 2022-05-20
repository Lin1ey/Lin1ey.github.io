const colorPalette = {
  dark: "#1d2024",
  light: "#DEE2E6",
  main: "#E5E5E5",
  darkContrastText: "#f5eeeb",
};

// const colorPalette = {
//     dark: "#000000",
//     light: "#FFFFFF",
//     main: "#E5E5E5",
//     text: "#000000",
//   };

// const colorPalette = {
//   dark: "#252422",
//   light: "#CCC5B9",
//   main: "#EB5E28",
//   text: "#000000",
// };

// const colorPalette = {
//   dark: "#393D3F",
//   light: "#FDFDFF",
//   main: "#62929E",
//   text: "#f5eeeb",
// };

const buttonStyleBlue = {
  border: "2px solid",
  borderRadius: 1,
  backgroundColor: "#FFFFFF",
  color: "#2196f3",
  ":hover": {
    bgcolor: "#2196f3", // theme.palette.primary.main
    color: "#FFFFFF",
    border: "2px solid",
    borderColor: "#2196f3",
  },
};

const buttonStyleBlack = {
  border: "2px solid",
  borderRadius: 1,
  backgroundColor: "#FFFFFF",
  color: "black",
  ":hover": {
    bgcolor: "#E5E5E5", // theme.palette.primary.main
    color: "black",
    border: "2px solid",
    borderColor: "black",
  },
};

//export default colorPalette;
export { colorPalette, buttonStyleBlack, buttonStyleBlue }
