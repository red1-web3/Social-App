import { atom } from "jotai";
import { useAtom } from "jotai/react";

const headerHeight = atom<number>(0);
export const useHeaderHeight = () => useAtom(headerHeight);
