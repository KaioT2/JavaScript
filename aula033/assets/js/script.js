//Exe: Criador de formulário

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
        let formELement = document.createElement('form');
        formELement.setAttribute('method', this.method);
        formELement.setAttribute('action', this.action);

        for(let i in this.items){
            this.items[i].render(formELement);
        }

        this.container.appendChild(formELement);
    }
}

class Input{

    _type = 'text';
    required = false;
    
    constructor(name, label){
        this.name = name;
        this.label = label;
    }

    get type(){
        return this._type;
    }

    set type(t){
        if(['text', 'password', 'email', 'submit'].includes(t)){
            this._type = t;
        }else{
            throw new Error(`Input "${t}" type doesn't exist!`)
        }
    }

    render(formELement){
        let el = document.createElement('input');
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required = this.required;
        formELement.appendChild(el);
    }
}

class Button extends Input{
    constructor(label){
        super("", label);
        this.type = 'submit';
    }

    render(formELement){
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;
        formELement.appendChild(el);
    }
}


//Implementação

//Formulário

let form = new Form('.formArea','POST', 'https://site.com.br');

//Email

let email = new Input("email"," Digite seu e-mail");
email.type = 'email';
email.required = true;
form.addItem(email);

//Senha

let password = new Input("password", "Digite sua senha");
password.type = 'password';
form.addItem(password);

//Botão

let button = new Button('Enviar');
form.addItem(button);

form.render();