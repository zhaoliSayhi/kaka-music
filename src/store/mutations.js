import * as types from './mutation-types'

const mutations = {
	[types.SET_SINGER] (state, singer) {
		state.singer = singer
	},
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  /* 推荐 */
  [types.SET_DISC] (state, disc) {
    state.disc = disc
  },
  /* 排行 */
  [types.SET_TOP_LIST] (state, list) {
    state.topList = list
  }
}

export default mutations