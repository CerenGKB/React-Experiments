import React, {useState} from "react"
import './App.css'

function App() {

  const [formData,setFormData] = React.useState({
    firstName: "",
    lastName : "",
    email: "",
    comments: "",
    ageCheckbox : false,
    employment: "",
    favColor: ""
  })

  function handleChange(event){
    const {name,value,type,checked} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
        }
      })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div id="allCss">
    <div class="text">
         Contact Us
      </div>

    <form onSubmit={handleSubmit}> 
   <div id="formCss">
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value= {formData.firstName}
              />
          <input
            type="text"
            placeholder="Last Name"
            onChange= {handleChange}
            name = "lastName"
            value= {formData.lastName}
          />
          <input
            type="email"
            placeholder="youremail@example.com"
            onChange = {handleChange}
            name= "email"
            value= {formData.email}
          />
          <textarea 
            placeholder= "Comments " 
            onChange={handleChange}
            name = "comments"
            value={formData.comments}
          />
          <div id="ageCheckBoxall">
          <input 
            type="checkbox"
            id= "ageCheckbox"
            checked= {formData.ageCheckbox}
            onChange={handleChange}
            name="ageCheckbox"
          />
          <label htmlFor="ageCheckbox">Check if you are above 18</label>
          </div>  
          <fieldset>
                <legend>Current employment status</legend>
              <div id="fieldSetStyle">
                <div id="radiobox">
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label id="unempLabel" htmlFor="unemployed">Unemployed</label>
                </div>
                <div id="radiobox">
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label id="unempLabel" htmlFor="part-time">Part-time</label>
              </div>
              <div id="radiobox">
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label id="unempLabel" htmlFor="full-time">Full-time</label>
                </div>
                </div>  
          </fieldset>
              <div id="favColorAll"> 
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                  <select
                  name= "favColor"
                  value= {formData.favColor}
                  onChange={handleChange}
                  id="favColor">
                      <option value="">--Choose a Color--</option>
                      <option value="red">Red</option>
                      <option value="orange">Orange</option>
                      <option value="yellow">Yellow</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="indigo">Indigo</option>
                      <option value="violet">Violet</option>
                </select>
                </div>
            <button>Submit</button>
            </div>
    </form>
    </div>
)
}

export default App
