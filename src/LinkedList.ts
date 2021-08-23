import Node from "../src/Node";
export default class LinkedList {
    value: any;
	next: any;
    head : any;
    constructor() {
			this.value = null;
			this.next = null;
		}

    add(value:any ) 
    {
        let currentItem: LinkedList = this.head;
        let newItem = new LinkedList(val);
    
            if (!currentItem) {
                this.head = newItem;
            } else {
                while (true) {
                    if (currentItem.next) {
                        currentItem = currentItem.next;
                    } else {
                        currentItem.next = newItem;
                        break;
                    }
                }
            }
    }
    
}