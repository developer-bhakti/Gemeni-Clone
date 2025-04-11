import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPromts, setPrevPromts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = ("");
    

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
       const response = await runChat(input)
    }
    

    const contextValue = {
        prevPromts,
        setPrevPromts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider;