import style from './inputElement.module.scss'

const InputElement = ({ id, placeholder, label, register, type}) => {


    return (
        <div className={style.textInput}>
            <label htmlFor={id}> {label}</label>
            <input type={type} id={id} placeholder={placeholder} ref={register} name={label} required/>
        </div>
    )
}

export default InputElement;