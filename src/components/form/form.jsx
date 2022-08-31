import { useState } from "react";
import './style.css'

function Form ({ listTransactions, setListTransactions }){

    const [description, setDescription] = useState("");
    const [type, setType]               = useState("");
    const [value, setValue]             = useState(0);

    const handleSubmit = (event) => {

        event.preventDefault();
              
        setListTransactions((oldTransactions) => [...oldTransactions, {description, type, value}])

        
    }

    return(
        <form onSubmit={handleSubmit}>
            <p className="descricao">Descrição</p>
            <input className="inputDescricao"
            placeholder="Digite aqui sua descrição"
            required            
            onChange={event => setDescription(event.target.value)} />
            <p className="pExemplo">Ex: Supermercado</p>
            <div className="divTextoForm">
                <p>Valor</p>
                <p className="tipoDeValor">Tipo de Valor</p>
            </div>
            <div className="divDosInputs">
                <input 
                className="inputValor"
                placeholder="1"
                required                
                onChange={event => setValue(Number(event.target.value))} />
                <select className="tiposDeOperacoes" required onChange={event => setType(event.target.value)} >
                    <option value="">Selecione</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
            </div>
            <button type="submit">Inserir Valor</button>

        </form>
    )
}

export default Form