import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-add-edit-empregado',
  templateUrl: './add-edit-empregado.component.html',
  styleUrl: './add-edit-empregado.component.css'
})

export class AddEditEmpregadoComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  /*
  @Input() emp: any;
  EmployeeId = "";
  EmployeeName = "";
  Department = "";
  DateOfJoining = "";
  PhotoFileName = "";
  PhotoFilePath = "";
  DepartmentList: any = [];
  */

  @Input() emp: any;
  EmployeeId = "";
  EmployeeName = "";
  Department = "";
  EmployeeEmail = "";
  EmployeeCargo = "";
  DepartmentList: any = [];

  ngOnInit(): void {
    //this.loadEmployeeList();
    this.carregaListaEmpregados();
  }

  //loadEmployeeList() {
  carregaListaEmpregados() {

    //this.service.getAllDepartmentNames().subscribe((data: any) => {
    this.service.getTodosNomesDepto().subscribe((data: any) => {
      this.DepartmentList = data;

      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.EmployeeEmail = this.emp.EmployeeEmail;
      this.EmployeeCargo = this.emp.EmployeeCargo;
      this.Department = this.emp.Department;
    });
  }

  //addEmployee() {
  addEmpregado() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      EmployeeEmail: this.EmployeeEmail,
      EmployeeCargo: this.EmployeeCargo,
      Department: this.Department
    };

    //this.service.addEmployee(val).subscribe(res => {
    this.service.addEmpregado(val).subscribe(res => {
      alert(res.toString());
    });
  }

  //updateEmployee() {
  updEmpregado() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      EmployeeEmail: this.EmployeeEmail,
      EmployeeCargo: this.EmployeeCargo,
      Department: this.Department,
    };

    //this.service.updateEmployee(val).subscribe(res => {
    this.service.updEmpregado(val).subscribe(res => {
      alert(res.toString());
    });
  }
}