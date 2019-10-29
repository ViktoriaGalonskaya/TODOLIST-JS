import {createMyElement} from "./createMyElement.js";

export function count_complete () {
    return document.getElementsByClassName('completed').length;
}
export function createCount_complete() {
    while (document.getElementById('count_complete').firstChild){
        document.getElementById('count_complete').removeChild(document.getElementById('count_complete').firstChild);
    }
    createMyElement('span', {id: 'count2'}, `Количество задач - ${count_complete()}`, 'count_complete');
}