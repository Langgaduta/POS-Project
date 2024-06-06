const Button = (props) => {
    const { text, className, style, onClick, disabled } = props;
  
    return (
      <button
        className={className}
        style={style}
        onClick={onClick}
        disabled={disabled} 
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  