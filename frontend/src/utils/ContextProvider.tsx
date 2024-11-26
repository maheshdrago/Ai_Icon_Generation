import { createContext, useContext, useReducer, useState } from "react"



const ToastContext = createContext({


})

export const ToastContextProvider = ({children }: { children: any}) => {
    const [message, setMessage] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    return(
        <ToastContext.Provider value={{message, isOpen, setIsOpen}}> 
            <div className="w-56 h-28 p-6 bg-black text-white rounded-md text-center">{message}</div>
            {children}
        </ToastContext.Provider>
    )
}