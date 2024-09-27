import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-show-empregado',
  templateUrl: './show-empregado.component.html',
  styleUrl: './show-empregado.component.css'
})

export class ShowEmpregadoComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  /*
  EmployeeList: any = [];
  ModalTitle = "";
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  */

  EmployeeList: any = [];
  ModalTitle = "";
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = {
      /*
      EmployeeId: "0",
      EmployeeName: "",
      Department: "",
      DateOfJoining: ""
      */
      EmployeeId: "0",
      EmployeeName: "",
      EmployeeEmail: "",
      EmployeeCargo: "",
      Department: ""
    }

    //this.ModalTitle = "Add Employee";
    this.ModalTitle = "Inclui Empregado";
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    //this.ModalTitle = "Edit Employee";
    this.ModalTitle = "Altera Empregado";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.delEmpregado(item.EmployeeId).subscribe(data => {
      //this.service.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    //this.service.getEmployeeList().subscribe(data => {
    this.service.getListaEmpregados().subscribe(data => {
      this.EmployeeList = data;
    });
  }
}