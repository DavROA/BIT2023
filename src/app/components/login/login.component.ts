import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:    FormGroup;
  loading= false;

  constructor(  private router: Router, 
                private fb: FormBuilder,
                private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  BTNinicio(){
    this.router.navigate(['dashboard'])  
  }

  ingresar(){
    const email    = this.form.value.email;
    const password = this.form.value.password;

    if(email == 'darooa@gmail.com' && password == 'admin'){
      //Redireccionar a dashboard
      this.router.navigate(['dashboard'])
      this.fakeLoading();
    }else{
      //mostrar un mensaje de error
      this.error();
      this.form.reset();
    }
  
  }

  error(){
    this._snackBar.open('Email o Contraseña son invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition:   'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      //lo redireccionamos al dashboard
      this.loading = false;
    },1500);
  }


}
