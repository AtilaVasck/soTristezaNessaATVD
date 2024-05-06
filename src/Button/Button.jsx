/* eslint-disable react/prop-types */
import './Button.css'

const Button = ({text, source}) => {
    return (
        <>        
        <button src={source}>{text}</button>
        </>
    )
}

export default Button;