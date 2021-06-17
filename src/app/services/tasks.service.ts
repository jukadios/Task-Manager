import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/models/tasks';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  /*Parte constante de la api*/
  apiUrl = 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge';
  /*Token que es constante*/
  token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'

  /*cliente HttpClient es para poder usar el CRUD */
  constructor(private http: HttpClient) { }

  /*El metodo post que recive un objeto con sus parametros*/
  postTasks(task: Tasks): Observable<any> {
    /*los headers que se tienen que mandar*/
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });

    /*pongo el obejto en un body porque si no recive un onjeto nulo*/
    const par: HttpParams = new HttpParams()
      .set('title', task.title)
      .set('is_completed', task.is_completed)
      .set('due_date', task.due_date)
      .set('comments', task.comments)
      .set('description', task.description)
      .set('tags', task.tags)
      .set('token', task.token);
    
    /*Se usa el servicio http con el metodo que se va a usar y dentro la constante de la api,
    despues de mandan los parametros 
    y al final los headers que ya se definieron anteriormente*/
    return this.http.post(`${this.apiUrl}/tasks`, par, {headers: head});
  }

  /*Obtiene todas la tareas que se han ingresado */
  getTasks(): Observable<any> {
    /*los headers que se tienen que mandar*/
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });

    /*Se manda el metodo con el api con el token en la misma linea y los headers al final*/
    return this.http.get(`${this.apiUrl}/tasks?token=${this.token}`, {headers: head});
  }

  /*Obtiene la tarea por id */
  getTask(id: number): Observable<any> {
    /*los headers que se tienen que mandar*/
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });
    
    /*Se manda el metodo con el api con el token en la misma linea y los headers al final*/
    return this.http.get(`${this.apiUrl}/tasks/${id}?token=${this.token}`, {headers: head});
  }

  /*Actualiza la tarea por id */
  putTask(id: number, task:Tasks): Observable<any> {
    /*los headers que se tienen que mandar*/
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });
    
    /*pongo el obejto en un body porque si no recive un onjeto nulo*/
    const par: HttpParams = new HttpParams()
      .set('title', task.title)
      .set('is_completed', task.is_completed)
      .set('due_date', task.due_date)
      .set('comments', task.comments)
      .set('description', task.description)
      .set('tags', task.tags)
      .set('token', task.token);

    /*Se usa el servicio http con el metodo que se va a usar y dentro la constante de la api,
    despues de mandan los parametros 
    y al final los headers que ya se definieron anteriormente*/
    return this.http.put(`${this.apiUrl}/tasks/${id}`, par, {headers: head});
  }

  /*Elinina la tarea por id */
  delTask(id: number): Observable<any> {
    /*los headers que se tienen que mandar*/
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });

    /*Se manda el metodo con el api con el token en la misma linea y los headers al final*/
    return this.http.delete(`${this.apiUrl}/tasks/${id}?token=${this.token}` ,{headers: head});
  }
}
