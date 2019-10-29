// Класс элемента

import {attrFields} from "./attrFields.js";

export class Element {
    constructor(type, props, children ){
        this.type = type;
        this.props = {}; // Для мусора

        let arr = {}; // для нормальных атрибутов
        for (let attr_el in props){
            if (attrFields.includes(attr_el)){
                arr[attr_el] = props[attr_el];
            } else {
                this.props[attr_el] = props[attr_el];
            }
        }

        this.attributes = arr;
        this.children = children;
    }
}

// const obj = new Element('span', {id: '123', className: 'spanka', foo: 'bar'}, "Hello!!");
// console.log(obj);
