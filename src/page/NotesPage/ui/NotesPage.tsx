import {Input} from "../../../shared/ui/Input/Input";
import {useState, KeyboardEvent, useEffect} from "react";


interface Notes {
    // name: string
    // description: string
    id: number
    text: string

}

export const NotesPage = () => {
    const [state, setState] = useState('')
    const [lists, setLists] = useState<Notes[]>([])
    const [isFocused, setIsFocused] = useState(false)

    const onBlur = (): void => {
        setIsFocused(false)
    }

    const onFocus = (): void => {
        setIsFocused(true)
    }
    const setContent = () => {
        if(state.trim() !== ''){
            const newLists = [...lists, {text: state, id: new Date().getTime()}]
            setState('')
            setLists(newLists)
            localStorage.setItem('lists', JSON.stringify(newLists) )
        }

    }
    const onBlurHandler = () => {
        setContent()
        onBlur()
    }
    const onEnter =(e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            setContent()
        }
    }
    useEffect(() => {
        if(lists.length === 0){
           const a = localStorage.getItem('lists')
            if(a){
                setLists(JSON.parse(a))
            }
        }
    },[])

    return (
        <>

            <div style={{width: 300, margin: '0 auto', background: "gray"}}>
                <Input onChange={setState}
                       onKeyDown={onEnter}
                       value={state}
                       onBlur={onBlurHandler}
                       onFocus={onFocus}
                />
            </div>
            {isFocused && 'isFocus'}
            <div style={{display: 'flex', flexWrap: "wrap", justifyContent: 'center'}}>
                {lists.map(el =>
                    <div key={el.id} style={{width: 300, height: 300, background: "gray", margin: 10}}>{el.text}</div>
                )}
            </div>
        </>
    );
};
