import style from './inputElement.module.scss'
const checkBoxElement = ({ id, label, name, isRequired}) => {

    return (
        <div className={style.checkbox}>
            <input type="checkbox" id={id} name={name} required={isRequired}/>
            <label htmlFor={id}> {label}</label>
        </div>
    )
}

export default checkBoxElement;