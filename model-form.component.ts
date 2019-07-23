import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    // this.userForm=new FormGroup({
    //   name:new FormControl("Raji",[Validators.required,Validators.minLength(4)]),
    //   email:new FormControl(),
    //   address:new FormGroup({
    //     city:new FormControl(),
    //     street:new FormControl(),
    //     pincode:new FormControl(null,Validators.pattern("^[5-7][0-9]{5}"))
    //   })
    // })
    // this.userForm=formBuilder.group({
    //   name:['Raji',[Validators.required,Validators.minLength(4)]],
    //   email:[],
    //   address:formBuilder.group({
    //     street:[],
    //     city:[],
    //     pincode:[null,Validators.pattern("^[5-7][0-9]{5}$")]
    //   })
    // })
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.userForm.value);
  }

}
