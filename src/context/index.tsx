import { atom } from "jotai";
import { useAtom } from "jotai/react";

const headerHeight = atom<number>(82.5);
export const useHeaderHeight = () => useAtom(headerHeight);
