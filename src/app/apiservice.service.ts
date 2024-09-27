import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) { }

  // Métodos de CRUD na tabela de Departamentos

  getListaDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'departamento/GetDepartamento');
  }

  addDepartamento(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'departamento/AddDepartamento', dept, httpOptions);
  }

  updDepartamento(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'departamento/UpdDepartamento/', dept, httpOptions);
  }

  delDepartamento(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'departamento/DelDepartamento/' + deptId, httpOptions);
  }

  // Métodos de CRUD na tabela de Empregados
  //getEmployeeList(): Observable<any[]> {
  getListaEmpregados(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl + 'employee/GetEmployee');
    return this.http.get<any[]>(this.apiUrl + 'empregado/GetEmpregado');
  }

  //addEmployee(emp: any): Observable<any> {
  addEmpregado(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // return this.http.post<any>(this.apiUrl + 'employee/AddEmployee', emp, httpOptions);
    return this.http.post<any>(this.apiUrl + 'empregado/AddEmpregado', emp, httpOptions);
  }

  //updateEmployee(emp: any): Observable<any> {
  updEmpregado(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //return this.http.put<any>(this.apiUrl + 'employee/UpdateEmployee/', emp, httpOptions);
    return this.http.put<any>(this.apiUrl + 'empregado/UpdEmpregado/', emp, httpOptions);
  }

  //deleteEmployee(empId: number): Observable<number> {
  delEmpregado(empId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //return this.http.delete<number>(this.apiUrl + 'employee/DeleteEmployee/' + empId, httpOptions);
    return this.http.delete<number>(this.apiUrl + 'empregado/DelEmployee/' + empId, httpOptions);
  }

  //getAllDepartmentNames(): Observable<any[]> {
  getTodosNomesDepto(): Observable<any[]> {
    //return this.http.get<any[]>(this.apiUrl + 'employee/GetAllDepartmentNames');
    return this.http.get<any[]>(this.apiUrl + 'empregado/GetTodosNomesDepto');
  }
}