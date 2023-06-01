import create from 'zustand';

const useFilterStore = create((set) => ({
	filter: '',
	setFilter: (newFilter) => set(() => ({ filter: newFilter })),
}));

export default useFilterStore;
