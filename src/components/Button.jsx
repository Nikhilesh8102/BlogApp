/* eslint-disable react/prop-types */


function Button({
    children,
    type = 'button',
    className = '',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    ...props
}) {
    return (
        <button type={type} className={`rounded-lg ${bgColor} ${textColor}  ${className}`} {...props}>{children}</button>
    )
}

export default Button;