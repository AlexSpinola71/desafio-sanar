import React, { Component } from 'react';

class form extends Component {
  state = {
    email: ''
  }

  submitHandler = (event) => {
    event.preventDefault();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.state.email.toLowerCase())){
      alert("Cadastrado efetuado com sucesso para:  " + this.state.email);
      this.setState({email: ''});
    } else {
      alert("Digite um e-mail válido");
    }
  }

  render(){
    return (
      <div>
        <h2>Assine a nossa Newsletter para saber de todas as novidades </h2>
        <form className="ui form">
          <div className="field">
            <input type="text" placeholder="Digite seu e-mail"  value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
          </div>
          <button className="ui blue button" type="submit" onClick={this.submitHandler.bind(this)} >Enviar</button>

        </form>
      </div>
    )
  }

}

export default form