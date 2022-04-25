const username: string | number = 'daniman';

const suma = (a: number | string, b: number) => {
  return (a = b);
};

suma(1, 2);

/* class Person {
  private age: number;
  lastname: string

  constructor(age:number, lastname:string){
    this.age = age;
    this.lastname = lastname;
  }
} */

/* Other way to do, more simple */

class Person {
  constructor(private age: number, public lastname: string) {}
}

const dani = new Person(24, 'Buitrago');
dani.lastname;
