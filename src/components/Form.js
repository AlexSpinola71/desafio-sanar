import React, { Component } from 'react';
import Warn from '../imgs/Sign.png'
class form extends Component {
  state = {
    email: '',
    valid: true
  }

  submitHandler = (event) => {
    event.preventDefault();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.state.email.toLowerCase())){
      this.setState({email: ''});
      this.setState({valid: true})
      alert("Cadastrado efetuado com sucesso para:  " + this.state.email);
    } else {
      this.setState({valid: false})
    }
  }

  render(){
    const textStyle = {
      color: 'white',
      fontFamily: 'Open Sans',
    }
    const container = {
      display: 'flex',
      alignItems: 'center'
    }

    return (
      <div>
        <form className="ui form">
          <div className="field" className={container}>
            <input  type="text" placeholder="Digite seu e-mail" style={{width: '70%'}} value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
            <button  className="ui teal medium button" type="submit" onClick={this.submitHandler.bind(this)} >Assinar</button>
          </div>
          {this.state.valid?  null :
            (<div
              style={{display: 'flex', justifyContent: 'center', paddingTop:'10px'}}>
              <span style={textStyle}>Digite um e-mail válido <img src={Warn} /></span>
            </div>)}
        </form>
      </div>
    )
  }

}

export default form