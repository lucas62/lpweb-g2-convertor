import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conversor';
  decimal = null;
  binario= null; 

  conversor(){
    
       var ConvertBase = function (num) {
           return {
               from : function (baseFrom) {
                   return {
                       to : function (baseTo) {
                           return parseInt(num, baseFrom).toString(baseTo);
                       }
                   };
               }
           };
       };
           
       // binary to decimal
       ConvertBase.bin2dec = function (num) {
           return ConvertBase(num).from(2).to(10);
       };
          
       this.ConvertBase = ConvertBase;
       
   };
      
}
