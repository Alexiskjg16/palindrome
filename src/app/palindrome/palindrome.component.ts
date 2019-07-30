import { Component, OnInit } from '@angular/core';


interface PalindromeObject {
 inputField: string;
 answerField: string;
}

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateWordEvent() {
    const inputFieldValue = 'inputField'
    if (inputFieldValue ===inputFieldValue.split('').reverse().join(''))
    return document.getElementById("yesOrNo").innerHTML = `You got it right!` ;
    else document.getElementById("yesOrNo").innerHTML = `You got it wrong!` ;
   }

   
}
