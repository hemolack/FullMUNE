import * as noun from './nouns';
import * as adjective from './adjectives';

export const getPortent = () => {
    return { adjective: getAdjective(), noun: getNoun() }
};

export const getAdjective = () => {
    let a = Math.floor(Math.random() * adjective.adjectives.length);
    return { word: adjective.adjectives[a], definition: adjective.adjective_definitions[adjective.adjectives[a]] };
}

export const getNoun = () => {
    let n = Math.floor(Math.random() * noun.nouns.length);
    return { word: noun.nouns[n], definition: noun.noun_definitions[noun.nouns[n]] };
}