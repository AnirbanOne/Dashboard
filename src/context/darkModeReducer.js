// const DarkModeReducer = (state, action) => {
//   switch (action.type) {
//     case "LIGHT": {
//       return {
//         darkMode: false,
//       };
//     }
//     case "DARK": {
//       return {
//         darkMode: true,
//       };
//     }
//     case "TOGGLE": {
//       return {
//         darkMode: !state.darkMode,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default DarkModeReducer;

// darkModeReducer.js

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT': {
      localStorage.setItem('darkMode', 'false'); // Save preference to local storage
      return {
        darkMode: false,
      };
    }
    case 'DARK': {
      localStorage.setItem('darkMode', 'true'); // Save preference to local storage
      return {
        darkMode: true,
      };
    }
    case 'TOGGLE': {
      const newMode = !state.darkMode;
      localStorage.setItem('darkMode', newMode.toString()); // Save preference to local storage
      return {
        darkMode: newMode,
      };
    }
    default:
      return state;
  }
};

export default darkModeReducer;

