import {Element} from "./Element.js";

// Класс Компонента
export class Component {
    constructor(object){
        if (object instanceof Element){
            this.object = object;
        } else {
            alert('Ошибка!!!!');
        }
    }

    render (){
        const type = this.object.type;
        const attributes = this.object.attributes;
        const children = this.object.children;

        let element;

        if (typeof type === 'string'){
            element = document.createElement(type);
        }

        for (let attribute in attributes){
            element[attribute] = attributes[attribute];
        }

        if (typeof children === 'string'){
            element.innerText = children;
        } else if (children === null){
            return null;
        } else if (typeof children === 'object'){
            const LiComponents = children.map(elem => new Component(elem));
            LiComponents.forEach(elem => element.appendChild(elem.render()))
        }

        return element;
    }
}
