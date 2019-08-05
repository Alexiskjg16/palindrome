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
       console.log(this.inputValue)
    }
  }

//     isPalindrome() {
//   if (this.inputValue.split('').reverse().join('') === this.inputValue) {
//                   console.log(this.inputValue)
//                 this.showYes = "You got it!"; }
//                 else {
//                 this.showNo = "Youre wrong";
//               } 
              
//   }
// 

  
  
//   
// export class PalindromeComponent implements OnInit {
//   ​  public inputValue: string;
//     public showYes: boolean;
//     public showNo: boolean;
 
    
//     constructor() {
//       this.inputValue = ''
//     }
//   ​
//     ngOnInit() {
//     }
    

//     isPalindrome(event: any) {

//       ​this.inputValue = event.target.value
//           if (this.inputValue.split('').reverse().join('') === this.inputValue) {
//             console.log(this.inputValue.split(''))
//           this.showYes = true;
//           this.showNo = false;
//         } else {
//           this.showNo = true;
//           this.showYes = false
//         }
//          }
//       