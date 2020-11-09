import * as React from 'react';
import Link from "next/link";
import Gheader from "../../component/Gheader";
import Gfooter from "../../component/gikalFoot";

const GikalMain:React.FC=()=>{


    return(
        <>
            <Gheader/>
            <section className="g-section">
                <div className="ttb">
                    <img src="http://ahah12k.cafe24.com//ptp2/resources/img/img.png" className="g-main"/>
                    <Link href="/gikal/selector/1"><a className="gogo">검사하러가기</a></Link>
                </div>
            </section>
            <Gfooter/>
        </>
    )
}
export default GikalMain