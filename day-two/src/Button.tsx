



const Button = (props:{label:string,onClick:()=>void,disabled:boolean}) => {
  return (
    <div>
        <label htmlFor="">{props.label} </label>
        <button onClick={props.onClick} >btn 1</button>
      <button disabled={props.disabled}>btn 2</button>
    </div>
  )
}

export default Button
