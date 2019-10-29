import {createCount_complete} from "./count_complete.js";

export function complete_task() {
    this.parentNode.classList.forEach(item => {
        if (item === 'completed'){
            this.parentNode.classList.remove('completed');
        } else {
            this.parentNode.classList.add('completed');
        }
    });
    createCount_complete();
}
