import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Student } from '../model/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  students: Student[] = [];
  public add : FormGroup;
  constructor(public formbilder: FormBuilder,
    public studentService: StudentsService,
    private nav: NavController) { 
    this.add = formbilder.group({

      id:[],
      name:["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email:["",[Validators.required, Validators.email]],
      country:["",Validators.required],
    })
  }
  ngOnInit() {
  }
  onadd(){
    const data = this. add.value;
    this.studentService.createStudent(data).subscribe((response) =>{
      console.log (response)
      this.nav.navigateForward('students')
    }
    );
  }
}
