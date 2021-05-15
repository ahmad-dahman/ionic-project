import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Student } from '../model/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
student: Student;
id: number;
public edit: FormGroup;
constructor(public formbuilder: FormBuilder,
            public studentService: StudentsService,
            private nav: NavController,
            public router: ActivatedRoute) {
              this.edit = formbuilder. group({
                id:[''],
                name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
                email: ["", [Validators.required, Validators.email]],
                country: ["", Validators.required]
  })
}

  ngOnInit() {
    this. id = this.router.snapshot.params["id"];
    //get item details using id
    this.studentService.getStudent(this.id).subscribe((response) =>
    {
      console.log(response);
      this.student = response;
      this.edit.patchValue(this.student);
    })
  }
      
      update(){
        const data = this.edit.value;
        this.studentService.updateStudent(this.id,data).subscribe(
          response => {

            this. edit. reset();
            console.log(response)
            this.nav.navigateForward('students')
        })
            
  }

}
