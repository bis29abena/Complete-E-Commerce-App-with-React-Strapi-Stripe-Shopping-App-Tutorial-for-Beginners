import {useState} from "react";

export default function useToggle(defualtValue) {
    const [value, setValue] = useState(defualtValue)

    const toggleValue = (value) => {
        setValue(currentValue => 
            typeof value === 'boolean' ? value : !currentValue
        )
    }

    return [value, toggleValue]
}