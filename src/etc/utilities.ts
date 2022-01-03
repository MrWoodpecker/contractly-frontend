import { Contract } from "../types/contracts";

export const getPriceOfContract = (contract: Contract, type: 'WEEK' | 'MONTH' | 'YEAR') => {

    let price = 0;


    if(contract.priceRangeType === 'DAYS') {
        if(type === 'WEEK') {
            price = (contract.pricePerRange * 7) / contract.priceRange;
        }
        if(type === 'MONTH') {
            price = (contract.pricePerRange * 30.41) / contract.priceRange;
        }
        if(type === 'YEAR') {
            price = (contract.pricePerRange * 365) / contract.priceRange;
        }
    }

    if(contract.priceRangeType === 'WEEKS') {
        if(type === 'WEEK') {
            price = (contract.pricePerRange * 1) / contract.priceRange;
        }
        if(type === 'MONTH') {
            price = (contract.pricePerRange * 4) / contract.priceRange;
        }
        if(type === 'YEAR') {
            price = (contract.pricePerRange * 51) / contract.priceRange;
        }
    }

    if(contract.priceRangeType === 'MONTHS') {
        if(type === 'WEEK') {
            price = (contract.pricePerRange * 0.25) / contract.priceRange;
        }
        if(type === 'MONTH') {
            price = (contract.pricePerRange * 1) / contract.priceRange;
        }
        if(type === 'YEAR') {
            price = (contract.pricePerRange * 12) / contract.priceRange;
        }
    }


    return price;

}