export interface CategoryWithoutEntries {
    name: string
    id: number
}

export interface Contract {
    id: number
    name: string
    pricePerRange: number
    priceRange: number
    priceRangeType: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS'
    contractStarts: string // ISO date string
    contractDuration: number | null
    contractDurationType: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS' | null
    contractRenewal: number | null
    contractRenewalType: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS' | null
    periodOfNotice: number | null
    periodOfNoticeType: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS' | null
    cancelationReminder: number | null
    cancelationReminderType: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS' | null
    customFields: Array<{
        name: string
        value: string
    }>
}

export interface Category extends CategoryWithoutEntries {
    entries: Array<Contract>
}