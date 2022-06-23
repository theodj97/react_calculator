import React from "react";
import '../styles/Calculator.css'
import Screen from "./Screen";
import Button from "./Button";

function Calculator() {
    return (
        <div className='calculator rounded shadow border-white border w-100 h-100 p-5 bg-gray'>
            <div className="row m-auto w-100 d-flex align-items-center justify-content-center">
                <Screen
                    value='0' />
            </div>
            <div className="row m-auto w-100 d-flex align-items-center justify-content-center">
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='9'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='8'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='7'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='/'
                        isNumeric={false} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='6'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='5'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='4'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='X'
                        isNumeric={false} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='1'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='2'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='3'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='-'
                        isNumeric={false} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='='
                        isNumeric={false} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='0'
                        isNumeric={true} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='.'
                        isNumeric={false} />
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center p-2">
                    <Button
                        text='+'
                        isNumeric={false} />
                </div>
            </div>
        </div>
    );
}

export default Calculator;