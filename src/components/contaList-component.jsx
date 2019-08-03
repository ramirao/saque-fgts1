import React from 'react'
import './contaList.css'
export const ContasList = props => (
    <div className="card-container">
         <ul>
            {props.contas.map(conta => (
            <p key={conta.id}>Conta {conta.id}, com saldo de R${conta.saldo}, o saque é de R$ {conta.vsaque}</p>
            ))}
        </ul>
    </div>
)

  export default ContasList

  