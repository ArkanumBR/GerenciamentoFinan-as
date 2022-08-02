import './style.css'
import { CgTrashEmpty } from 'react-icons/cg';


function Card ({ transaction }){

    return (
        <div className='card'>
            <div className='infosCard'>
                <span className='descricaoTransacao'>{transaction.description}</span>
                <span className='valorTransacao'>{transaction.value.toLocaleString('pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span>
                <span className='lixeira'><CgTrashEmpty className='trash'/></span>

            </div>
            <span className='tipoTransacao'>{transaction.type}</span>
        </div>
    )
}

export default Card