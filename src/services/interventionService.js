const interventionList = [
    { type: 'New entity', description: 'You encounter a new entity.' },
    { type: 'Entity positive event', description: 'Something positive happens to an existing entity.' },
    { type: 'Entity negative event', description: 'Something negative happens to an existing entity.' },
    { type: 'Advance plot', description: 'The plot advances in a positive direction.' },
    { type: 'Regress plot', description: 'The plot advances in a negative direction.' },
    { type: 'Wild', description: 'Something completely unexpected happens.' },
]

export const getIntervention = () => {
    let n = Math.floor(Math.random() * interventionList.length);
    return interventionList[n];
}