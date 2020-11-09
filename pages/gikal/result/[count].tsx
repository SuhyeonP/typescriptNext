import * as React from 'react'
import Link from "next/link";
import Gheader from "../../../component/Gheader";
import Gfooter from "../../../component/gikalFoot";

const SelectorG:React.FC=()=>{



    return(
        <>
            <Gheader/>
            <section className="g-section">
                <div className="result-imgs">
                    <img src={require("")} className="result-img"/>
                </div>
                <div className="result-txt">
                    <h2 className="result-title">
                        당신은
                        <span className="result-breath"></span>
                        의 호흡과 잘 맞는군요.
                    </h2>
                    <p className="whois"></p>
                    <p className="char-exp"></p>
                </div>
            </section>
            <Gfooter/>
        </>
    )
}
export default SelectorG;