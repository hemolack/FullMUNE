const interventionList = [
    'New entity',
    'Entity positive event',
    'Entity negative event',
    'Advance plot',
    'Regress plot',
    'Wild'
]

export const getIntervention = () => {
    let n = Math.floor(Math.random() * interventionList.length);
    return interventionList[n];
}