import {useState} from 'react'

function useToggle(initVal) {
    const [state, setState] = useState(initVal);

    const toggleVal = () => {
        setState(!state)
    }
    
    return [state, toggleVal]
}

export default useToggle