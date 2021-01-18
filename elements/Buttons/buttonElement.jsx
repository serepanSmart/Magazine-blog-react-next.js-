const ButtonElement = ({value, className, type, onClick}) => {
    return (
    <button type={type} value={value} className={className} onClick={onClick}>{value}</button>
    );
  };

  export default ButtonElement;