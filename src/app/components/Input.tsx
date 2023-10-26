import React,{ChangeEvent} from 'react';

interface Props {
    name:string;
    className:string;
    label:string;
    placeholder:string,
    inputType:string;
    value:string;
    onChange: (event:ChangeEvent<HTMLInputElement>)=>void;
}
const Input:React.FC<Props>=({name,label,placeholder,inputType,value,onChange}) => {
    return(
        <div className="flex flex-col place-content-centerj gap-y-2">
            <label className="flex flex-col fap-y-3">{label}</label>
            <input 
            name={name}
            className="rounded-md bg-gray-50 border border-gray-200 placeholder:text-xs placeholder:text-gray-100"
            type={inputType} 
            value={value}
            onChange={onChange}
            placeholder={placeholder} />
        </div>
    )
}
export default Input