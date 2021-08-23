export default class Queue {
    
    items: any[];
    constructor(...params: any[]) 
    {
      console.log(params);
      this.items = [...params];
    }

    enqueue(item: any)
    {   
        this.items.push(item);
    }

    dequeue() 
    {
        return this.items.shift();
    } 
    
    getItems()
    {
          return this.items;
    }
   
    getLast()
    {   let a = this.items.length;
        return this.items[a -1];
    }
    isEmpty() {

        if(this.items[0] == null)
        {
            return true;
        }
        else
        {
            return false;
        }
            
         
    }
    getFront()
    {   if(this.isEmpty() == false)
        {
            return this.items[0] ;
        }
        else
        {
            return;
        }

    }
}