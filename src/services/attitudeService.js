const attitudeList = [
    'Hostile',
    'Neutral',
    'Friendly'
];

export const getAttitude = () => {
    let n = Math.floor(Math.random() * attitudeList.lengh);
    return attitudeList[n];
}