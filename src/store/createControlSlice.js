
const createControlSlice = (set, get) => ({
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
