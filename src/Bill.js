import Cost from './Cost';

export default class Bill extends Cost{
    constructor(dueDate){
        this.dueDate = dueDate;
        this.isPaid = false;
    }
} 
