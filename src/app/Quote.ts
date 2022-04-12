export class Quote{
    public upVote:number;
    public downVote:number;
  
    public showDetails:boolean;
    public timeDifference:number;
    constructor(public quote:string,
        public author:string,
        public name:string,
        public timePassed:Date){
        
        this.upVote = 0;
        this.downVote = 0;
        this.timeDifference = 0;
        this.showDetails = false;
    }

}