import create from 'zustand';
import { Language } from '../types/language';

type State = {
    language: Language
    setLanguage: (l: Language) => void
}

const initialState = {
    language: 'pd' as 'pd'
}


export const useLanguageStore = create<State>(set => ({
    ...initialState,

    /**
     * Change the current language.
     * 
     * @param l 
     */
    setLanguage: (l) => {

        set({ language: l });

    }

}));