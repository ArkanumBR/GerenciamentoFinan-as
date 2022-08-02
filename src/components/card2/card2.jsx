import './style.css'
import { CgTrashEmpty } from 'react-icons/cg';

function CardVermelho ({ transaction }){

    return (
        <div className='card2'>
            <div className='infosCard2'>
                <span className='descricaoTransacao2'>{transaction.description}</span>
                <span className='valorTransacao2'>{transaction.value > 0 ? (transaction.value* -1).toLocaleString('pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })  : (transaction.valuetoLocaleString('pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }))}</span>
                <span className='lixeira2'><CgTrashEmpty className='trash'/></span>

            </div>
            <span className='tipoTransacao2'>{transaction.type}</span>
        </div>
    )
}

export default CardVermelho