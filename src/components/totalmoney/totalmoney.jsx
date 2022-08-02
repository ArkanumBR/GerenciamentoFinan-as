import "./style.css"

function TotalMoney({ listTransactions }){

    const somatorio = listTransactions.reduce((acumulador, valorAtual) => {
        console.log("olaaaa")
        return (
        valorAtual.type === "Entrada" ?
        (acumulador + valorAtual.value)
         : 
        (acumulador - valorAtual.value)
    )},0
    
    )
    console.log(somatorio)
    

    return(
        <div className="totalMovimento">
            <div className="containerMoney">
                <span className="valorTotal">Valor total:</span>
                <span className="somatorio">{somatorio.toLocaleString('pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span>
            </div>
            <p className="saldo">O valor se refere ao saldo</p>

        </div>
    )
}

export default TotalMoney