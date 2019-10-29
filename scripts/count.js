import {createMyElement} from "./createMyElement.js";

export function count() {
    return document.getElementsByClassName('task_item').length;
}

export function createCount() {
    while (document.getElementById('count').firstChild){
        document.getElementById('count').removeChild(document.getElementById('count').firstChild);
    }
    createMyElement('span', {id: 'count1'}, `Количество задач - ${count()}`, 'count');
}