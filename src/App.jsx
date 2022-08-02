
import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import List from './components/list/list';
import TotalMoney from './components/totalmoney/totalmoney';
import nukenzie from './components/imgs/nukenzie.svg'


function App() {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 }
  ])  

  return (
    <div>
      <header>
        <div>
            <img src={nukenzie} alt='imagem'/>
            <button>Início</button>
        </div>
      </header>
      <main>
        <div className='containerPrincipal'>
          <div className='coluna1'>
            <Form 
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}/>
            <TotalMoney 
            listTransactions={listTransactions}
            />
          </div>
          <div>
            <List 
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}/>
          </div>
        </div>    
      </main>
    </div>
  );
}

export default App;
