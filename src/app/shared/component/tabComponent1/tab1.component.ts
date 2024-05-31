import { Component } from "@angular/core";
import { Iskills } from "../../model/tab.interface";
import { skills } from "../../const/tab";



@Component({
    selector:"app-tabComponent1",
    templateUrl:"./tab1.component.html",
    styleUrls:["./tab1.component.scss"]
})

export class TabComponent{

    selectedFrameWork:string="html"
    skillArr:Array<Iskills>=skills

    // onClick(val:string){
    //     this.selectedFrameWork=val;
    // }

}