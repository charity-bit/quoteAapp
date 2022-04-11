export class Quote{
    public upVote:number;
    public downVote:number;
    public timePassed:Date;
    public showDetails:boolean;
   

    constructor(public quote:string,public author:string,public name:string){
        this.timePassed = new Date();
        this.upVote = 0;
        this.downVote = 0;
        this.showDetails = false;
    }

}