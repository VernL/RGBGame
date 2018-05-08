//Create Random RGB
function randomRGB() {
  let tR = Math.floor(Math.random() * 256);
  let tG = Math.floor(Math.random() * 256);
  let tB = Math.floor(Math.random() * 256);
  return "rgb(" + tR + ", " + tG + ", " + tB + ")";
}

function initializeBoard(state) {
  state.previousRGB = state.targetRGB;
  state.win = false;
  state.squaresColor = [];
  state.message = "";
  for (let i = 0; i < state.numSquares; i++) {
    let color = randomRGB();
    state.squaresColor.push({ color: color, clicked: false });
  }
  state.targetRGB =
    state.squaresColor[Math.floor(Math.random() * state.numSquares)].color;
}

const state = {
  test: "hello from game.js",
  targetRGB: "steelblue",
  previousRGB: "255, 255, 255",
  numSquares: 6,
  message: "Pick a color",
  squaresColor: [],
  win: false,
  game: false
};

const getters = {
  squaresColor(state) {
    return state.squaresColor;
  },
  targetRGB(state) {
    return state.targetRGB;
  },
  message(state) {
    return state.message;
  },
  numSquares(state) {
    return state.numSquares;
  },
  game(state) {
    return state.game;
  },
  win(state) {
    return state.win;
  },
  previousRGB(state) {
    return state.previousRGB;
  }
};

const mutations = {
  EASY_MODE(state) {
    state.numSquares = 3;
    initializeBoard(state);
  },

  HARD_MODE(state) {
    state.numSquares = 6;
    initializeBoard(state);
  },
  LOADING(state) {
    state.numSquares = 6;
    preGame(state);
  },
  RESET(state) {
    state.numSquares = 6;
    initializeBoard(state);
  },
  CHECK_TILE(state, payload) {
    if (state.squaresColor[payload].color === state.targetRGB) {
      state.message = "You got it!!! Awesome!";
      state.win = true;
      for (let i = 0; i < state.numSquares; i++) {
        state.squaresColor.splice(i, 1, {
          color: state.targetRGB,
          clicked: true
        });
      }
    } else {
      state.message = "Wrong! Try Again!";
      state.squaresColor.splice(payload, 1, {
        color: "#232323",
        clicked: true
      });
    }
  },
  GAME(state) {
    state.game = true;
  },
  NEWGAME(state) {
    state.win = false;
  }
};

const actions = {
  easyMode: ({ commit }) => {
    commit("EASY_MODE");
  },
  hardMode: ({ commit }) => {
    commit("HARD_MODE");
  },
  reset: ({ commit }) => {
    commit("RESET");
  },
  checkTile: ({ commit }, payload) => {
    commit("CHECK_TILE", payload);
  },
  start: ({ commit }) => {
    commit("RESET");
    let vm = state;
    let timerId = setInterval(function() {
      if (vm.game === false) {
        commit("RESET");
      } else {
        clearTimeout(timerId);
      }
    }, 2000);
  },
  game: ({ commit }) => {
    commit("GAME");
  },
  newGame: ({ commit }) => {
    commit("NEWGAME");
    commit("RESET");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
