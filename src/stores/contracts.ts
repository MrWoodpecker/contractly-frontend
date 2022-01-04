import create from 'zustand';
import dayjs from 'dayjs';
import PubSub from "pubsub-js";
import { Category, CategoryWithoutEntries, Contract } from '../types/contracts';
import { getPriceOfContract } from '../etc/utilities';

type State = {
    categories: Array<Category>

    getNumberOfCategories: () => number,
    getNumberOfContracts: () => number,
    getTotalCostsOfContracts: (type: 'WEEK' | 'MONTH' | 'YEAR', categoryId?: number) => number,

    getContractById: (id: number) => Contract | undefined,
    // getCategoriesWithoutEntries: () => Array<CategoryWithoutEntries>,
}

const initialState = {
    categories: [
        {
            name: 'Entertainment',
            id: 1, 
            entries: [{
                id: 1,
                name: 'Netflix',
                pricePerRange: 17.99,
                priceRange: 1,
                priceRangeType: 'MONTHS' as 'MONTHS',
                contractStarts: '2013-01-01T10:00:00Z000', 
                contractDuration: null,
                contractDurationType: null,
                contractRenewal: null,
                contractRenewalType: null,
                periodOfNotice: 1,
                periodOfNoticeType: 'DAYS' as 'DAYS',
                cancelationReminder: 5,
                cancelationReminderType: 'DAYS' as 'DAYS',
                customFields: [{
                    name: 'E-Mail',
                    value: 'christian.arp@posteo.de'
                }]
            }]
        }
    ]
};


export const useContractsStore = create<State>((set, get) => ({
    ...initialState,


    getNumberOfCategories: () => {

        return get().categories.length;

    },

    getNumberOfContracts: () => {

        let numberOfContracts = 0;


        get().categories.forEach(category => {
            numberOfContracts += category.entries.length;
        });


        return numberOfContracts;

    },

    getTotalCostsOfContracts: (type, categoryId) => {

        let totalCostsOfContracts = 0,
            filteredCategories = get().categories;


        if(categoryId) {
            filteredCategories = get().categories.filter(c => c.id === categoryId);
        }

        filteredCategories.forEach(category => {
            category.entries.forEach(entry => {
                totalCostsOfContracts += getPriceOfContract(entry, type);
            });
        });


        return totalCostsOfContracts;

    },


    getContractById: (id) => {

        let contract: Contract | undefined = undefined;


        get().categories.forEach(category => {
            category.entries.forEach(entry => {
                if(entry.id === id) {
                    contract = entry;
                }
            })
        });

        console.log(contract)


        return contract;

    }

}));