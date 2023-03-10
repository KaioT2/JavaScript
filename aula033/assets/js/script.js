//Exe:

class Form{

    items = [];
    method = 'GET';

    constructor(container, method, action){
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item){
        this.items.push(item);
    } 

    render(){
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method);
        formElement.setAttribute('action', this.action);

        for(let i in this.items){
            this.items[i].render(formElement);
        }

        this.container.appendChild(formElement);
    }
}

class Input {

    required = false;
    _type = 'text';

    constructor(name, label){
        this.label = label;
        this.name = name;
    }

    get type(){
        return this._type;
    }

    set type(t){
        if(['text', 'password', 'email', 'submit'].includes(t)){
            this._type = t;
        }
        else{
            throw new Error (`The input "${t}" type doesn't exits!`)
        }
    }

    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required = this.required;
        formElement.appendChild(el);
    }
}

class Button extends Input{
    constructor(label){
        super("", label);
        this.type = 'submit';
    }

    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;
        formElement.appendChild(el);
    }
}

//IMPLEMENTAÇÃO

let form = new Form('.formArea', 'POST', 'https://site.com.br');

//Email
let email = new Input("email","Digite o seu e-mail");
email.type = 'email';
email.required = true;
form.addItem(email);

//Senha
let password = new Input("password","Digite a sua senha");
password.type = 'password';
password.required = true;
form.addItem(password);

//Botão
let button = new Button("Enviar");
form.addItem(button);

form.render();