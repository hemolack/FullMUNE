const tweneEntryList = [
    'Increase simple element',
    'Decrease simple element',
    'Add simple element',
    'Remove simple element',
    'Increase major element',
    'Decrease major element',
    'Add major element',
    'Remove major element',
    'Wild negative',
    'Wild positive'
];

export const getTweneEntry = () => {
    let n = Math.floor(Math.random() * tweneEntryList.length);
    return tweneEntryList[n];
}