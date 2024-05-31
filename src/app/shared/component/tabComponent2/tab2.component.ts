import { Component } from "@angular/core";
import { Iskills } from "../../model/tab.interface";
import { skills } from "../../const/tab";


@Component({
    selector:"app-tabComponent2",
    templateUrl:"./tab2.component.html",
    styleUrls:["./tab2.component.scss"]
})

export class TabComponent2{

    skillArr:Array<Iskills>=skills;
    selectedFrameWork:string='html';
    nums:number=5

    abc:any="hdf"

    onClick(val:any){
        console.log(val)
    }

}