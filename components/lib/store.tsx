import { create } from "zustand";

interface IsOpenMenu {
  openDropdown: boolean;
  setOpenDropdown: (value: boolean) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  category: string;
  setCategory: (value: string) => void;
  openingHours: boolean;
  setOpeningHours: (value: boolean) => void;
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  openDropdown: false,
  setOpenDropdown: (value) => set({ openDropdown: value }),
  open: false,
  setOpen: (value) => set({ open: value }),
  category: "",
  setCategory: (value) => set({ category: value }),
  openingHours: false,
  setOpeningHours: (value) => set({ openingHours: value }),
  openMenu: false,
  setOpenMenu: (value) => set({ openMenu: value }),
}));

export default useStore;
