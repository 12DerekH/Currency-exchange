import './App.css';
import './style.css';
import {useState} from 'react'

const options = [
  { currency: 'USD', value: 'usd'},
  { currency: 'CAD', value: 'cad'},
  { currency: 'EUR', value: 'eur'},
  { currency: 'AUD', value: 'aud'},
  { currency: 'GBP', value: 'gbp'},
  { currency: 'JPY', value: 'jpy'}
]

function App() {

  //Conrtolled by the 'Amount to Convert' input box
  const [inputAmount,setInputAmount] = useState('0.00');
  //Controlled by the 'From' drop-down
  const [inputCurrency,setInputCurrency] = useState('USD');
  //Controlled by the 'To' drop-down
  const [outputCurrency,setOutputCurrency] = useState('USD');
  //Contains resulting converted amount from api
  const [finalAmount,setFinalAmount] = useState('---');

  // Handles the Convert button
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The input currency is: ${inputCurrency}, the amount is: ${inputAmount}`)

    fetch(`https://v6.exchangerate-api.com/v6/7979b19d337356ea2dbea1d6/latest/${inputCurrency}`) 
    .then(currency => currency.json())
    .then(result => {
      //console.log(result.conversion_rates);
      //var rate = result[inputCurrency][outputCurrency];
      var rate = result.conversion_rates[outputCurrency.toUpperCase()];
      setFinalAmount(inputAmount * rate)
    })
    .catch(error => console.log('error',error)); 
  }

  // Handles the reset button
  const clearVal = (event) => {
    event.preventDefault();
    setInputAmount(0.00)
    setInputCurrency('USD')
    setOutputCurrency('USD')
    setFinalAmount('---')

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

                      <p className="input-group-text">From</p> 

                  </div> 

                  <select className="form from" value={inputCurrency} onChange={event => setInputCurrency(event.target.value)}>
                    {options.map((option) => (
                      <option value={option.value}>{option.currency}</option>
                    ))}
                  </select>

              </div> 

          </div> 



          <div className="col-sm-6"> 

              <div className="input-group mb-3"> 

                  <div className="input-group-prepend"> 

                      <p className="input-group-text">To</p> 

                  </div> 

                  <select className="form out" value={outputCurrency} onChange={event => setOutputCurrency(event.target.value)}>
                    {options.map((option) => (
                      <option value={option.value}>{option.currency}</option>
                    ))}
                  </select>


              </div> 

          </div> 

        </div> 

        <div className="text-center"> 

          <button className="btn btn-primary convert m-2" type="submit"> Convert </button> 

          <button className="btn btn-primary m-2" onClick={clearVal}> Reset </button> 

        </div> 
          
        <div className="finalAmount">
          <h2>Converted Amount : </h2>
          <p className="finalValue">{finalAmount}</p>
        </div>
          
      </form>
    </div>
  );
}

export default App;
