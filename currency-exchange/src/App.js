import './App.css';
import './style.css';
import {useState} from 'react'

const options = [
  { currency: 'USD'},
  { currency: 'CAD'},
  { currency: 'EUR'},
  { currency: 'AUD'},
  { currency: 'GBP'},
  { currency: 'JPY'}
]

function App() {

  const currencyrateapi = "https://api.exchangerate-api.com/v4/latest/USD"; 

  //Conrtolled by the 'Amount to Convert' input box
  const [inputAmount,setInputAmount] = useState('0.00');
  //Controlled by the 'From' drop-down
  const [inputCurrency,setInputCurrency] = useState('USD');
  //Controlled by the 'To' drop-down
  const [outputCurrency,setOutputCurrency] = useState('USD');
  //Contains resulting converted amount from api
  const [finalAmount,setFinalAmount] = useState('0.00');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The input currency is: ${inputCurrency}, the amount is: ${inputAmount}`)
  }

  const clearVal = (event) => {
    event.preventDefault();
    setInputAmount(0.00)
  }

  return (
    <div className="App">
      <h1 className="heading text-center display-2"> Currency Converter</h1> 
      <form className="main" onSubmit={handleSubmit}>
        <div className="form-group"> 

          <label id="amount"> Amount to Convert :  </label> 

          <input type="number" 
            className="form-control searchBox" 
            onChange={(e) => setInputAmount(e.target.value)}
            value={inputAmount}
            id="amount"
          /> 

        </div> 
        <div className="row"> 

          <div className="col-sm-6"> 

              <div className="input-group mb-3"> 

                  <div className="input-group-prepend"> 

                      <span className="input-group-text">From</span> 

                  </div> 

                  <select className="form from" value={inputCurrency} onChange={event => setInputCurrency(event.target.value)}>
                    {options.map((option) => (
                      <option value={option.currency}>{option.currency}</option>
                    ))}
                  </select>

              </div> 

          </div> 



          <div className="col-sm-6"> 

              <div className="input-group mb-3"> 

                  <div className="input-group-prepend"> 

                      <span className="input-group-text">To</span> 

                  </div> 

                  <select className="form out" value={outputCurrency} onChange={event => setOutputCurrency(event.target.value)}>
                    {options.map((option) => (
                      <option value={option.currency}>{option.currency}</option>
                    ))}
                  </select>


              </div> 

          </div> 

        </div> 

        <div className="text-center"> 

          <button className="btn btn-primary convert m-2" type="submit"> Convert </button> 

          <button className="btn btn-primary m-2" onClick={clearVal}> Reset </button> 

        </div> 
          
        <div>
          <h2>Converted Amount : </h2>
          <p>Test</p>
        </div>
          
      </form>
    </div>
  );
}

export default App;
