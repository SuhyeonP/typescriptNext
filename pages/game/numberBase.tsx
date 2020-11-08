import *as React from "react";
import { useState,useCallback,useRef,ChangeEvent } from 'react';
import LayOut from "../../component/layout";
import Try from '../../component/game/try'

export interface TryInfo {
    try: string;
    result: string;
}

export interface TryProps {
    tryInfo: TryInfo;
}

function getNumbers(){
    const candidate=[1,2,3,4,5,6,7,8,9]
    const array=[]
    for(let i=0;i<4;i++){
        const chosen=candidate.splice(Math.floor(Math.random()*(9-i)),1)[0]
        array.push(chosen)
    }
    return array;
}


const NumberBaseBall:React.FunctionComponent=(()=>{
    const [answer, setAnswer] = useState(getNumbers)
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [tries, setTries] = useState<TryInfo[]>([])
    const inputEl = useRef<HTMLInputElement>(null)

    const onSb = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const input=inputEl.current;
        if(value===answer.join('')){
            setTries(t=>([...t,{
                try:value,
                result:'homerun!'
            }]))
            setResult('homerun!')
            alert('game is reset')
            setValue('')
            setAnswer(getNumbers)
            setTries([])
            if(input){
                input.focus()
            }
        }else{
            const answerArray=value.split('').map(x=>parseInt(x))
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                if (input) {
                    input.focus();
                }
            }else{
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries(t => ([
                    ...t,
                    {
                        try: value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                    },
                ]));
                setValue('');
                if (input) {
                    input.focus();
                }
            }
        }
    }, [value,answer])
    const onC = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [])


    return (
        <>
            <LayOut/>
            <section className="game-section baseball">
                <div>
                    <h1>{result}</h1>
                    <form onSubmit={onSb}>
                        <input
                            ref={inputEl}
                            maxLength={4}
                            value={value}
                            onChange={onC}/>
                        <button>go!</button>
                    </form>
                    <div>try:{tries.length}</div>
                    <ul>
                        {tries.map((a, b) => {
                            return (<Try key={`${b + 1}차시도: ${a.try}`} tryInfo={a}/>)
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
})
export default NumberBaseBall;