import {Element} from "./Element.js";
import {Component} from "./Component.js";

export function createMyElement(type, props, children, target) {
    const element = new Element(type, props, children);
    const component = new Component(element);
    document.getElementById(target).appendChild(component.render());
}
