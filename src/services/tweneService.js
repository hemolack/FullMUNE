const tweneEntryList = [
    'Increase a simple element.',
    'Decrease a simple element.',
    'Add a simple element.',
    'Remove a simple element.',
    'Increase a major element.',
    'Decrease a major element.',
    'Add a major element.',
    'Remove a major element.',
    'There is a wild negative element.',
    'There is a wild positive element.'
];

export const getTweneEntry = () => {
    let n = Math.floor(Math.random() * tweneEntryList.length);
    return tweneEntryList[n];
}