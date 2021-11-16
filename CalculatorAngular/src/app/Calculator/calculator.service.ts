import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpressionI, ResultI } from './CalculatorInterfaces';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  	constructor(private http: HttpClient) { }

	postExpression(experssion : ExpressionI): Observable<ResultI>{
		return this.http.post<ResultI>("http://localhost:8080/result", experssion);
  	}
	clearResult(){
		return this.http.post("http://localhost:8080/clear", "clear")
	}
 	

	

}
