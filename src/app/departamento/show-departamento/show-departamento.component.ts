import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-show-departamento',
  templateUrl: './show-departamento.component.html',
  styleUrl: './show-departamento.component.css'
})

export class ShowDepartamentoComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  /*
  DepartmentList: any = [];
  ModalTitle = "";
  ActivateAddEditDepartComp: boolean = false;
  depart: any;

  DepartmentIdFilter = "";
  DepartmentNameFilter = "";
  DepartmentListWithoutFilter: any = [];
  */

  listaDeptos: any = [];
  ModalTitle = "";
  ActivateAddEditDepartComp: boolean = false;
  depart: any;

  FiltroIDDepto = "";
  FiltroNomeDepto = "";
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshListDepto();
  }

  addClick() {
    this.depart = {
      IDDepto: "0",
      NomeDepto: ""
    }

    this.ModalTitle = "*** Inclui Departamento *** ";
    this.ActivateAddEditDepartComp = true;
  }

  editClick(item: any) {
    this.depart = item;
    this.ModalTitle = "*** Altera Departamento *** ";
    this.ActivateAddEditDepartComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Tem certeza de que quer excluir o departamento ??')) {
      this.service.delDepartamento(item.IDDepto).subscribe(data => {
        alert(data.toString());
        this.refreshListDepto();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditDepartComp = false;
    this.refreshListDepto();
  }

  refreshListDepto() {
    this.service.getListaDepartamentos().subscribe(data => {
      this.listaDeptos = data;
      this.DepartmentListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.listaDeptos = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var FiltroIDDepto = this.FiltroIDDepto;
    var FiltroNomeDepto = this.FiltroNomeDepto;

    this.listaDeptos = this.DepartmentListWithoutFilter.filter(
      function (el: any) {
        return el.IDDepto.toString().toLowerCase().includes(
          FiltroIDDepto.toString().trim().toLowerCase()
        ) &&
          el.NomeDepto.toString().toLowerCase().includes(
            FiltroNomeDepto.toString().trim().toLowerCase())
      }
    );
  }
}