import { createStore } from 'vuex';

export default createStore({
  state: {
    currentPlayer: 'X',
    moves: 0,
    playerX: [],
    playerO: [],
    winner: '',
    winMatches: [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ],
  },
  /* eslint-disable */
  mutations: {
    setPlayer: (state) => {
      state.currentPlayer === 'X'
        ? state.currentPlayer = 'O'
        : state.currentPlayer = 'X';
    },
    trackPlay: (state, payload) => {
      payload.player === 'X'
        ? state.playerX.push(payload.value)
        : state.playerO.push(payload.value);
    },
    incrementMoves: (state) => state.moves ++,
    setWinner: (state, payload) => state.winner = `${payload} wins!`,
    reset: (state) => {
      state.currentPlayer = 'X';
      state.moves = 0;
      state.playerX = [];
      state.playerO = [];
      state.winner = '';
    },
  },
  /* eslint-disable */
  actions: {
    checkWinner({ state, commit }) {
      Array.prototype.findMatch = function(arr2) {
        var ret = [];
        this.sort();
        arr2.sort();
        for(var i = 0; i < this.length; i += 1) {
          if(arr2.indexOf(this[i]) > -1){
            ret.push(this[i]);
          }
        }
        return ret;
      };

      state.winMatches.map(match => {
        state.currentPlayer === 'X'
          ? state.playerX.findMatch(match).length === 3 && commit('setWinner', 'X')
          : state.playerO.findMatch(match).length === 3 && commit('setWinner', 'O');
      });
      commit('setPlayer');
    },
  },
});
