import create from 'zustand';

const useBagStore = create((set) => ({
	bag: 0,
	inc: () => set((state) => ({ bag: state.bag + 1 })),
}));

export default useBagStore;
