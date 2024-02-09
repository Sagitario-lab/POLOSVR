import {atom} from 'recoil'

export const selectedFilter = atom({
    key: 'selected_Filter',
    default: ''
});

export const selectedBooksList = atom({
    key: 'selected_Books_List',
    default: []
})

export const allBooks = atom({
    key: 'all_Books',
    default: []
})

export const bestSellers = atom({
    key: 'bestSellers',
    default: []
})

