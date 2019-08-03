import React, {Component} from 'react'
import ContasList from './contaList-component'

class Saque extends Component {
    constructor(props) {
      super(props);
      this.state = { contas: [], saldo: '' };
      
    }
   
    handleChange = (e) => {
        this.setState({ saldo: e.target.value });
      }
    
     handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.saldo.length) {
          return;
        }
    const vsaque = (saldo) => {
        let saque=0;
        if (saldo <= 500) {
         saque=saldo*0.5
        } else if (saldo>500 && saldo<=1000) {
        saque=saldo*0.4+50
        } else if (saldo>1000 && saldo<=5000) {
        saque=saldo*0.3+150
       } else if (saldo>5000 && saldo<=10000) {
          saque=saldo*0.2+650
       } else if (saldo>10000 && saldo<=15000) {
        saque=saldo*0.15+1150
       } else if (saldo>15000 && saldo<=20000) {
        saque=saldo*0.1+1900
       } else if (saldo>20000) {
       saque=saldo*0.05
       }

       return saque.toFixed(2)
    }
        const novaConta = {
          saldo: this.state.saldo,
          vsaque:vsaque(this.state.saldo),
          id: this.state.contas.length + 1
        };
        this.setState(state => ({
          contas: state.contas.concat(novaConta),
          saldo: ''
        }));
      }
    
      handleClick = (e) => {
        this.setState({contas:[], saldo: ''})
      }
  
    render() {
      return (
        <div>
          <ContasList contas={this.state.contas} />
          <form onSubmit={this.handleSubmit}>
            <input
              type="number"
              id="nova-conta"
              onChange={this.handleChange}
              value={this.state.saldo}
              placeholder="Digite o saldo da conta R$"
            />
            <button>
              Adicionar #{this.state.contas.length + 1}
            </button>
            <button onClick={this.handleClick}>
              Apagar
            </button>
          </form>
        </div>
      );
    }
}
   export default Saque
  
  
  