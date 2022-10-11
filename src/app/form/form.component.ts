import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
gender ="Female";
user = {
name : "",
pass : "",
cpass : ""
}
submitted = false;
constructor() { }

ngOnInit(): void {}
onSubmit(f:NgForm)
{
this.submitted = true;
this.user.name = f.value.name;
this.user.pass = f.value.pass;
this.user.cpass = f.value.cpass;
f.reset();
}

 
}
