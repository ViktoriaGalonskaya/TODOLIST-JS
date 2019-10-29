import {createMyElement} from "./createMyElement.js";
import {complete_task} from "./complete_task.js";
import {del_task} from "./del_task.js";
import {createCount} from "./count.js";
import {createCount_complete} from "./count_complete.js";

export function addTask () {
    const idForLabel = Math.random();
    const idForLi = Math.random()*10;
    let value = document.getElementById('input1').value;

    if ( value !== ''){
        createMyElement('li', {className: 'task_item', id: idForLi.toString() }, '', 'ul1');
        createMyElement('input', {type: 'checkbox', className: 'checkbox', id: idForLabel.toString(),onclick: complete_task }, '', idForLi.toString() );
        createMyElement('label', {htmlFor: idForLabel.toString()}, value, idForLi.toString() );
        createMyElement('button', {className: 'del_button', onclick: del_task}, 'Удалить задачу', idForLi.toString());
    } else {
        alert('Введите задачу!');
    }

    document.getElementById('input1').value = '';
    createCount();
    createCount_complete();
}

