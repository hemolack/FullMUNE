const oracleList = [
    { answer: 'No, and ...', strike: 1, interventionPoints: 0 },
    { answer: 'No.', strike: 0, interventionPoints: 0 },
    { answer: 'No, but ...', strike: 1, interventionPoints: 0 },
    { answer: 'Yes, but ...', strike: 1, interventionPoints: 0 },
    { answer: 'Yes.', strike: 0, interventionPoints: 0 },
    { answer: 'Yes, and ...', strike: 1, interventionPoints: 1 }
];

export const getOracle = (mode = NORMAL) => {
    if(mode === NORMAL) {
        let n = Math.floor(Math.random() * oracleList.length);
        return oracleList[n];
    }
    if(mode === LIKELY_YES) {
        return likelyYes();
    }
    if(mode === LIKELY_NO) {
        return likelyNo();
    }
    if(mode === YES_OR_NO) {
        return yesOrNo();
    }
};

export const likelyYes = () => {
    let m = Math.floor(Math.random() * oracleList.length);
    let n = Math.floor(Math.random() * oracleList.length);
    return oracleList[Math.max(m, n)]
}

export const likelyNo = () => {
    let m = Math.floor(Math.random() * oracleList.length);
    let n = Math.floor(Math.random() * oracleList.length);
    return oracleList[Math.min(m, n)]
}

export const yesOrNo = () => {
    let n = Math.floor(Math.random() * 2);
    return oracleList[(n + 1) * (n + 1)];
}

export const LIKELY_YES = 1;
export const LIKELY_NO = -1;
export const NORMAL = 0;
export const YES_OR_NO = 9;