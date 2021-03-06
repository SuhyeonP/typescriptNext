import * as React from 'react'
import Gheader from "../../../component/Gheader";
import Gfooter from "../../../component/gikalFoot";
import {useRouter} from "next/router";
import {expresult,breath,charName,imgsrc} from '../../../exporthing/gikalResultArray'
import Link from "next/link";

const SelectorG:React.FC=()=>{
    const router2=useRouter();
    const {result}=(router2.query);
    const nnn=Number(result)-1;
    const cbreath=breath[nnn];
    const exp=expresult[nnn];
    const imgs=imgsrc[nnn];
    const cname=charName[nnn];

    return(
        <>
            <Gheader/>
            <section className="g-section">
                <div className="result-imgs">
                    <img src={imgs} className="result-img"/>
                </div>
                <div className="result-txt">
                    <h2 className="result-title">
                        당신은
                        <span className="result-breath" >&nbsp;{cbreath}&nbsp;</span>
                        의 호흡과 잘 맞는군요.
                    </h2>
                    <p className="whois">{cname}</p>
                    <p className="char-exp">{exp}</p>
                </div>
                <Link href="/"><a className="gobackM">돌아가기</a></Link>
            </section>
            <Gfooter/>
        </>
    )
}
export default SelectorG;

