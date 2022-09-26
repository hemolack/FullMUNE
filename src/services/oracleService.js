const oracleList = [
    'No, and ...',
    'No.',
    'No, but ...',
    'Yes, but ...',
    'Yes.', 
    'Yes, and ...'
];

export const getOracle = () => {
    let n = Math.floor(Math.random() * oracleList.length);
    console.info(n);
    return { answer: oracleList[n], interventionPoints: n == 5 ? 1 : 0 };
};

export const likelyYes = () => {
    let m = Math.floor(Math.random() * oracleList.length);
    let n = Math.floor(Math.random() * oracleList.length);
    return { answer: oracleList[Math.max(m, n)] }
}

export const likelyNo = () => {
    let m = Math.floor(Math.random() * oracleList.length);
    let n = Math.floor(Math.random() * oracleList.length);
    return { answer: oracleList[Math.min(m, n)] }
}