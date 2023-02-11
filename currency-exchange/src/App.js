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

  const [inputCurrency,setInputCurrency] = useState('USD');
  const [outputCurrency,setOutputCurrency] = useState('USD');

  
  // for selecting different controls 
  
  var search = document.querySelector(".searchBox"); 
  
  var convert = document.querySelector(".convert"); 
  
  var fromCurrecy = document.querySelector(".from"); 
  
  var toCurrecy = document.querySelector(".to"); 
  
  var finalValue = document.querySelector(".finalValue"); 
  
  var finalAmount = document.getElementById("finalAmount"); 
  
  var resultFrom; 
  
  var resultTo; 
  
  var searchValue; 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The input currency is: ${inputCurrency}`)
  }

  const clearVal = (event) => {
    event.preventDefault();
    alert('Clear value')
  }

  return (
    <div className="App">
      <h1 className="heading text-center display-2"> Currency Converter</h1> 
      <form className="main" onSubmit={handleSubmit}>
        <div className="form-group"> 

          <label id="amount"> Amount to Convert :  </label> 

          <input type="text" 
            className="form-control searchBox" 
            placeholder="0.00" 
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


          <button className="btn btn-primary m-2" 

                  onClick={clearVal}> 

            Reset 

          </button> 

          </div> 
      </form>
    </div>
  );
}

export default App;
