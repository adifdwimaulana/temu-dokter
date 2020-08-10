import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Input(props) {
    const { name, type, placeholder, onChange, value, label } = props;

    const className = [props.className]

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className.join(" ")}
            />
        </>
    )
}

Input.defaultProps = {
    type: "text",
    className: ""
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    type: propTypes.oneOf(['text', 'number', 'password']),
    onChange: propTypes.func,
    className: propTypes.string,
    value: propTypes.any
}