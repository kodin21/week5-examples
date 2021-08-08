import './App.css';
import { useState, useMemo } from 'react';
import StatelessInput from './components/StatelessInput';
import StatefulInput from './components/Statefulnput';
/*

[
    Order Form
        Name,
        Surname,
        IBAN,
        Email,
        Phone
]



*/
function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function App() {

  const [formValues, setFormValues] = useState({
    name: {
      value: ''
    },
    surname: {
      value: ''
    },
    email: {
      value: '',
      isBlurred: false 
    }
  });
  
  // ...
  
  const isFormValid = useMemo(() => {
    if(!formValues.name) {
      return false;
    } else if (!formValues.surname) {
      return false;
    } else if ((!formValues.email || !isEmail(formValues.email))) {
      if (!formValues.email.error) {
        setFormValues({
          ...formValues,
          email: {
            ...formValues.email,
            isValid: false,
            error: 'Email is not valid'
          }
        });
      }
      return false;
    }
    if (formValues.email.error) {
      console.log(formValues.email.error);
      setFormValues({
        ...formValues,
        email: {
          ...formValues.email,
          isValid: true,
          error: false
        }
      });
    }
    return true;
  } , [formValues]);

  const handleSubmit = (event) => {
    console.log("event", event);
    event.preventDefault();
  }
  return (
    <div className="App">
      <form>
        <label>
          Name*
          <StatelessInput
            type="text"
            onChange={(event) => setFormValues({ ...formValues,  name: { value: event.target.value }  }   )}
          />
        </label>
        <label>
          Surname
          <input type="text"
          onChange={(event) => setFormValues({ ...formValues,  surname: { value: event.target.value }  }   )}
          >
            
          </input>
        </label>
        <label>
          Iban
          <select name="characters">
              <option value="square">TR XXXX</option>
              <option value="circle">TR YYYY</option>
        </select>
        </label>
        <label>
          Email
          <StatefulInput
          inputType="email"
         
            onChange={
              (value) => {
                setFormValues({
                  ...formValues,
                  email: { value } 
                }   )
              
              }}
          />
        </label>
        <label>
          Phone
          <input type="text"></input>
        </label>
        <label>
          Agreement
          <input type="checkbox" />
        </label>

        <button
        disabled={!isFormValid}
        type="submit" onClick={handleSubmit}>
          GONDER
        </button>
      </form>
    </div>
  );
}

export default App;
