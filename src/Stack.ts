export default class Stack 
{     
    items:  any[];
    constructor(...params: any[])
    {
            console.log(params);
            this.items = [...params];
    }
    isEmpty() 
    {

        if(this.items[0] == null)
        {
            return true;
        }
        else
        {
            return false;
        }
            
         
    }
    count()
    {    
        return this.items.length;
    }
    push(item: any)
    {   
        this.items.unshift(item);

    }
    pop()
    {
        return this.items.shift();
    }   
    peek()
    {
        return this.items[this.items.length - 1];
    }

}