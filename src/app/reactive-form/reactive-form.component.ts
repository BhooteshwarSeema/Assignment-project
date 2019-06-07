import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

profileForm: FormGroup;
genders = ['male', 'female'];

ngOnInit() {

  this.profileForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('male'),
    hobbies: new FormArray([])
  });
}
onAddHobby() {
const control = new FormControl(null);
( this.profileForm.get('hobbies') as FormArray).push(control);

}

onSubmit() {

 console.log(this.profileForm);


}

}



