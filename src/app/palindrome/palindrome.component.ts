import { Component, OnInit, ViewChild, QueryList, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
   })

export class PalindromeComponent {
  @Input() inputName;
   public showYes: string;
   public showNo: string;
 
    
    constructor() {
    }
  ​
    ngOnInit() {
    }
    
      @ViewChild('inputName', {static: false})
      inputValue: 'inputName';

    

  

    isPalindrome() {
  if (this.inputValue.split('').reverse().join('') === this.inputValue) {
                  console.log(this.inputValue)
                this.showYes = "You got it!"; }
                else {
                this.showNo = "Youre wrong";
              } 
              
  }
}

  
 