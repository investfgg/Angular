import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-add-edit-departamento',
  templateUrl: './add-edit-departamento.component.html',
  styleUrl: './add-edit-departamento.component.css'
})

export class AddEditDepartamentoComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  /*
  @Input() depart: any;
  DepartmentId = "";
  DepartmentName = "";
  */

  @Input() depart: any;
  IdDepto = "";
  NomeDepto = "";

  ngOnInit(): void {
    this.IdDepto = this.depart.IdDepto;
    this.NomeDepto = this.depart.NomeDepto;
  }

  addDepartamento() {
    var dept = {
      DepartmentId: this.IdDepto,
      DepartmentName: this.NomeDepto
    };

    this.service.addDepartamento(dept).subscribe(res => {
      alert(res.toString());
    });
  }

  updDepartamento() {
    var dept = {
      DepartmentId: this.IdDepto,
      DepartmentName: this.NomeDepto
    };

    this.service.updDepartamento(dept).subscribe(res => {
      alert(res.toString());
    });
  }
}