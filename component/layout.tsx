import *as React from 'react';
import Link from "next/link";
import {memo} from 'react'

const LayOut:React.FunctionComponent=memo(()=>{
    return(
        <>
            <div className="menu-div">
                <ul className="main-layout">
                    <li><Link href="/"><a>home</a></Link></li>
                    <li><Link href="/game/numberBase"><a>Number BaseBall</a></Link></li>
                    <li><Link href="/game/mine"><a>지뢰 찾기</a></Link></li>
                    <li><Link href="/gikal"><a>귀멸의 칼날 Remake (모바일전용)</a></Link></li>
                    <Link href="http://data.honeyhyoni.shop/"><a target="_blank" rel="noreferrer noopener" >Infinite Scrolling</a></Link>
                    <li><Link href="/mass/paging"><a>페이징 처리</a></Link></li>
                </ul>
            </div>
        </>
    )
})
export default memo(LayOut);