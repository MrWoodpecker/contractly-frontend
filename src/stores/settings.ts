import create from 'zustand';
import { DateRangeSingular } from '../types/settings';

type State = {
    priceRange: DateRangeSingular
}

const initialState = {
    priceRange: 'MONTH' as 'MONTH'
}


export const useSettingsStore = create<State>(set => ({
    ...initialState,
}));