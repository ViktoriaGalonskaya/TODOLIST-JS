import {createCount} from "./count.js";
import {createCount_complete} from "./count_complete.js";
import {createMyElement} from "./createMyElement.js";
import {addTask} from "./addTask.js";

window.onload = function () {
   // createMyElement('span', {id: '123', className: '456'}, 'Span from');

    createCount();
    createCount_complete();

    createMyElement('input', {type: 'text', id: 'input1', placeholder: 'Введите задачу'}, '', 'input_field');
    createMyElement('button', {id: 'button', onclick: addTask}, 'Добавить задачу', 'input_field');
    createMyElement('ul', {id: 'ul1', className: 'list'}, '', 'tasks');

    document.getElementById('input1').addEventListener('keydown', function (elem) {
        if(elem.keyCode === 13){
            addTask();
        }
    })
    // const objElement = new Element('h3', {id: 'idForH3', className: 'classForH3', rgsrr: 'sgrftged'}, 'This is H3.render()');
    // const objComponent = new Component(objElement);
    // document.getElementById('app').appendChild(objComponent.render());
    // console.log(objComponent);
};

