import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userLogin';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin:UserLogin) {
this.http.post('http://localhost:9000/usuarios/logar', userLogin)
  }

  cadastrar(user:User) {
    this.http.post('http://localhost:9000/usuarios/cadastrar', user)

  }
}
