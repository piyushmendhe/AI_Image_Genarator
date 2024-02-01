import {surpriseMePromts} from '../constants'

export function getRandomPromt(prompt)
{
    const randomIndex = Math.floor(Math.random()*surpriseMePromts.length);
    const getRandomPromt=surpriseMePromts[randomIndex];

    if(randomIndex === prompt) return getRandomPromt(prompt);

    return getRandomPromt;
}