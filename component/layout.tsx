import *as React from 'react';
import Link from "next/link";

const LayOut:React.FunctionComponent=()=>{
    return(
        <>
            <div className="menu-div">
                <ul className="main-layout">
                    <li><Link href="/"><a>home</a></Link></li>
                    <li><Link href="/game/numberBase"><a>Number BaseBall</a></Link></li>
                    <li><Link href="/game/mine"><a>지뢰 찾기</a></Link></li>
                    <li><Link href="/gikal"><a>귀멸의 칼날 Remake (모바일전용)</a></Link></li>
                    <li><Link href="/mass/posting"><a>대용량 데이터 처리</a></Link></li>
                    <li><Link href="/mass/paging"><a>페이징 처리</a></Link></li>
                </ul>
            </div>
        </>
    )
}
export default LayOut;