
const createControlSlice = (set, get) => ({

  mute: true,
  setMute: (payload) => {
    set(() => ({ mute: payload }));
  },


  isRendered: false,
  setIsRendered: (payload) => {
    set(() => ({ isRendered: payload }));
  },

  activePlanet: null,
  setActivePlanet: (payload) => {
    set(() => ({
      activePlanet: payload,
    }));
  },
  toggleGalaxy: false,
  setToggleGalaxy: (payload) => {
    set(() => ({
        toggleGalaxy: payload,
    }));
  },
});

export default createControlSlice;
