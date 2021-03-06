// src/components/CatInputs.js
import React from "react"

const createOptions = (props, idx) =>{
  let out = {}
  if(props.fields[idx].type === "Location"){
    out = props.fields[idx].options.map((val, option_id)=> {
      return (<ul>
        <li>
        <label htmlFor={option_id}>label</label>
        </li>
        <div>
        <input {...props}
      type="text"
      name={option_id}
      value={props.fields[idx].options[option_id].label} 
      className="option_label"
      onChange={(e) => props.handleOptionChange(e,idx,option_id,"label")}

      />
        </div>
      <li>
      <label htmlFor={option_id}>value</label>
      </li>
      <div>
      <label htmlFor={option_id}>lat</label> 
      <input {...props}
      type="Text"
      name={option_id}
      value={(props.fields[idx].options[option_id].value.latShow)} 
      className="option_value"
      onChange={(e) => props.handleOptionChange(e,idx,option_id,"lat")}

      />
      <label htmlFor={option_id}>long</label>
      <input {...props}
      type="Text"
      name={option_id}
      value={(props.fields[idx].options[option_id].value.longShow)} 
      className="option_value"
      onChange={(e) =>{
        return props.handleOptionChange(e,idx,option_id,"long")
              }
    }

      />
      </div>

      </ul>)
  })
  }else{
    out = props.fields[idx].options.map((val, option_id)=> {
      return (<ul>
        <li>
        <label htmlFor={option_id}>label</label>
        </li>
        <div>
        <input {...props}
      type="text"
      name={option_id}
      value={props.fields[idx].options[option_id].label} 
      className="option_label"
      onChange={(e) => props.handleOptionChange(e,idx,option_id,"label")}

      />
        </div>
      <li>
      <label htmlFor={option_id}>value</label>
      </li>
      <div>
      <input {...props}
      type="text"
      name={option_id}
      value={props.fields[idx].options[option_id].value} 
      className="option_value"
      onChange={(e) => props.handleOptionChange(e,idx,option_id,"value")}

      />
      </div>

      </ul>)
  })
  }
  return out;
}

const FieldInputs = (props) => {
  let fieldProps = {}
  fieldProps.required = props.required
  return (
    props.fields.map((val, idx)=> {
      let catId = idx
      let out = (
        <div key={idx}>
          <div>
          <label htmlFor={catId}>name</label>
          </div>
          <div>
          <input {...props}
            type="text"
            name={catId}
            value={props.fields[idx].name} 
            className="name"
            onChange={props.onChange}
          />
          </div>
          <div>
          <label htmlFor={catId}>title</label>
          </div>
          <div>
          <input {...props}
            type="text"
            name={catId}
            value={props.fields[idx].title} 
            className="title"
            onChange={props.onChange}

          />
          </div>
         <div>
         <label htmlFor={catId}>type</label>
         </div>
         <select
              {...props}
              name={catId}
              value={props.fields[idx].type}  
                className="type"
                onChange={props.onChange}
              >
                <option value="">Choose</option>
                <option value="Text">Text</option>
                <option value="Number">Number</option>
                <option value="Date">Date</option>
                <option value="Location">Location</option>
              </select>
          <div>
          <label htmlFor={catId}>required</label>
          </div>
          <div>
          <select
              {...props}
              name={catId}
              value={props.fields[idx].required} 
                className="required"
                onChange={props.onChange}
              >
                <option value="">Choose</option>
                <option value={true}>true</option>
                <option value={false}>false</option>
              </select>
          </div>
       
          
        <button className="btn btn-link" 
        onClick={() => props.addOption(idx)}>
            Add Option
            </button>


        </div>
      )
      let options = <div></div>
      if(props.fields[idx].options){
        options =  createOptions(props, idx)
    }

      out = <div>
          {out}
          {options}
      </div>
      return out
    })
  )
}
export default FieldInputs