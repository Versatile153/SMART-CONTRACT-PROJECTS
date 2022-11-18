import {Context, storage} from "near-sdk-as";

 export class  Greeting {

    getGreeting(accountId:string):string|null{
        return storage.get<string>(accountId,"greeting is not availabe");


    }

    setGreeting(greeting:string):void{
        storage.set(Context.sender,greeting)

    }


}