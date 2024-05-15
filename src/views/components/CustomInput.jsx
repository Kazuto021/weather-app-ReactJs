import React from 'react'

const CustomInput = (props) => {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">{props.label}</span>
                <input type="text" className="form-control" placeholder={props.label} aria-label={props.label} aria-describedby="basic-addon1"/>
            </div>
        </>
    )
}

export default CustomInput