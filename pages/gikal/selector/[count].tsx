import * as React from 'react'
import Router from 'next/router';
import { useCallback} from 'react'
import {questionArray,imageArray ,answerOb} from "../util/gikalResultArray";
import {useRouter} from "next/router";
import Gfooter from "../../../component/gikalFoot";
import Gheader from "../../../component/Gheader";

const ResultG:React.FC=()=>{
    const router=useRouter();
    const {count}=(router.query);
    const cn=Number(count)-1
    const sn=Number(count)
    const imgSrc=imageArray[cn]
    const que=questionArray[cn]
    console.log(cn,typeof cn)
    const a1=answerOb.list[cn].first
    const a2=answerOb.list[cn].second

    const gotoS1=()=>{
        let t=sn;
        if(sn===1){
            t+=1;
        }else if(sn===2||sn===3){
            t+=2;
        }else if(sn===4||sn===5||sn===6){
            t+=3;
        }else{
            t-=6;
            return Router.replace(`/gikal/result/${t}`)
        }
        return Router.replace(`/gikal/selector/${t}`)
    }

    const gotoS2=()=>{
        let t=sn;
        if(sn===1){
            t+=2;
        }else if(sn===2||sn===3){
            t+=3;
        }else if(sn===4||sn===5||sn===6){
            t+=4;
        }else{
            t-=6;
            return Router.replace(`/gikal/result/${t}`)
        }
        return Router.replace(`/gikal/selector/${t}`)
    }

    return(
        <>
            <Gheader/>
            <section className="g-section">
                <div className="qaa">
                    <div className="question">
                        <img src={imgSrc} className="qimg"/>
                        <p className="question-txt" >{que}</p>
                    </div>
                    <div className="answer">
                        <button className="selectbu" onClick={gotoS1}>{a1}</button>
                        <button className="selectbu" onClick={gotoS2}>{a2}</button>
                    </div>
                </div>

            </section>
            <Gfooter/>
        </>
    )
}
export default ResultG;