import { Todo } from './todo.class';


export class TodoList {

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ){
        const resultado = this.todos.filter(todo => todo.id != id);
        this.todos = resultado;
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for (const todo of this.todos){

            if( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados (){

        this.todos = this.todos.filter(todo => todo.completado == false);
        this.guardarLocalStorage();

    }

    guardarLocalStorage (){
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    cargarLocalStorage (){

        localStorage.getItem('todo') 
            //se pierde la instancia del objeto, y se genera un objeto normal
            ? this.todos = JSON.parse(localStorage.getItem('todo')) 
            : this.todos = [];

        this.todos = this.todos.map(obj=>  Todo._fromJson( obj ) )
        //la linea anterior también se puede poner así ya que solo tiene un argumento
        // cada uno de los valores que sacara .map se va a pasar como argumento a la funcion Todo._fromJson
        // this.todos = this.todos.map( Todo._fromJson )

    }

}