import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Student } from '../model/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  constructor(public navCtrl:NavController, public service:StudentsService, public route: ActivatedRoute) { }

   listevide: any
   id:number
    student: string = this.route.snapshot.params.id;
 

  ngOnInit() {
    this.showAllStudent();
  }
  ionViewWillEnter(){
    
  }
  add(){
    this.navCtrl.navigateForward("/add");
  }
  
  delete(id){
   
    this.service.deleteStudent(id).subscribe(()=>{
      this.showAllStudent();
    }
    )
  }

  edit(id: number){
this.navCtrl.navigateForward(['update-student/'+id]);
  }

  showAllStudent(){
    this.service.getStudents().subscribe(
      (data)=>{
        this.listevide=data
      }
    )

  }

}
