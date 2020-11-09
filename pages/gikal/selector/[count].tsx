import * as React from 'react'
import Router from 'next/router';
import {questionArray,imageArray
,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10
} from "../../../exporthing/gikalResultArray";
import {useRouter} from "next/router";
import Gfooter from "../../../component/gikalFoot";
import Gheader from "../../../component/Gheader";

const ResultG:React.FC=()=>{
    const router=useRouter();
    const {count}=(router.query);
    const cn:number=Number(count)-1
    const sn=Number(count)
    const imgSrc=imageArray[cn]
    const que=questionArray[cn]
    let h1,h2:string=''
    if(cn===0){
         h1=a1[0]
         h2=a1[1]
    }else if(cn===1){
         h1=a2[0]
         h2=a2[1]
    }else if(cn===2){
         h1=a3[0]
         h2=a3[1]
    }else if(cn===3){
         h1=a4[0]
         h2=a4[1]
    }else if(cn===4){
         h1=a5[0]
         h2=a5[1]
    }else if(cn===5){
         h1=a6[0]
         h2=a6[1]
    }else if(cn===6){
         h1=a7[0]
         h2=a7[1]
    }else if(cn===7){
         h1=a8[0]
         h2=a8[1]
    }else if(cn===8){
         h1=a9[0]
         h2=a9[1]
    }else{
         h1=a10[0]
         h2=a10[1]
    }
    console.log(h1,h2)

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
            return Router.push('/gikal/result/'+t)
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
            return Router.push('/gikal/result/'+t)
        }
        return Router.replace(`/gikal/selector/${t}`)
    }

    const test=()=>{
        console.log('test')
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
                        <button className="selectbu" onClick={gotoS1}>{h1}</button>
                        <button className="selectbu" onClick={gotoS2}>{h2}</button>
                    </div>
                </div>

            </section>
            <Gfooter/>
        </>
    )
}
export default ResultG;