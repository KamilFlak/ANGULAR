import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulara';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('Reksio',4);
  days = ['Poniedzialek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'
  ];
  isVisible = true;
  isHidden = false;
  show(){
    this.isVisible = !this.isVisible;
  }
  hidden(){
    this.isHidden = !this.isHidden;
  }

  dogs = new Array<Dog>();
  
  constructor(){
    this.dogs.push(new Dog('Reksio', 4),new Dog('Łatek', 3),new Dog('Maksiu', 5),new Dog('Łapek', 3),new Dog('Pluto', 3));
  }


  showDog() {
    return 'Moj pies to ' + this.dog.name + ' i ma '+ this.dog.age + ' lata';
  }
  addDogs(){

  }
  removeDogs(){
    
  }
}

class Dog{
  constructor(public name: string, public age:number){

  }

}
