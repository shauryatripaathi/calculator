import './style.css'
export default function ActionButton(props){
    return(
        <>
            <button onClick={props.onClick} className='buttonStyle'>{props.btn}</button>
        </>
    )
}