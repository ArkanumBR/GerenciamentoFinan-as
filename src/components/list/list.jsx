import Card from "../card/card"
import CardVermelho from "../card2/card2"
import './style.css'

function List ({ listTransactions }){

    return (
        <>
        {listTransactions.length > 0 ?
        <div className="list">            
            <div className="cabecalhoCard">
                <span className="tituloList">Resumo Financeiro</span>
                <div className="divBotoesList">
                    <button className="botoesFiltro">Todos</button>
                    <button className="botoesFiltro">Entradas</button>
                    <button className="botoesFiltro">Despesas</button>
                </div>
            </div>
            <div className="cardTransacoes">
                {listTransactions.map((transaction, index) => 
                transaction.type === "Entrada" ? 
                (<Card transaction={transaction} key={index} />)
                :
                (<CardVermelho transaction={transaction} key={index} />))}
            </div>           
            
        </div>
        :
        <div className="divVazia">Não existem transações</div>
                }
        </>
    )
}

export default List