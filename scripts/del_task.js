import {createCount} from "./count.js";
import {createCount_complete} from "./count_complete.js";

export function del_task () {
    this.parentNode.parentNode.removeChild(this.parentNode);
    createCount();
    createCount_complete();
}