import * as React from 'react';
import LayOut from "../../component/layout";
import {useEffect, useCallback, useState} from "react";
import DummyPost from "../../component/dummyPost";
import * as faker from 'faker'
import * as shortId from 'shortid'
import PropType, {arrayOf} from "prop-types";

export const generateDummyPost = (number) => Array(number).fill(null).map(() => {
    return {id:shortId.generate(),name:faker.name.findName(),content:faker.lorem.paragraph()}
});



let count=1;

const Data=()=>{
    const [hasMoreData,setHasMoreData]=useState(true);
    const [loadPost,setLoadPost]=useState(false);
    const dd=generateDummyPost(8)
    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                console.log("start")
                setTimeout(function(){setLoadPost(true);count+=1;},3000);
                if(hasMoreData&&loadPost){
                    console.log(count)
                    if(count<50){
                        setTimeout(function(){
                            dd.concat(generateDummyPost(5));
                            setLoadPost(false)
                        },3000)
                    }else{
                        alert("램이 터질거같아용 ㅠㅠ ")
                    }
                    console.log("loading")
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [hasMoreData,loadPost]);

    return(
        <div className="container">
            <LayOut/>
            <h2 className="data-info">무한 post 로딩 스크롤 이벤트</h2>
            <section className="datapg">
                {dd.map((x)=>{
                    return (
                        <DummyPost posts={x}/>
                    )
                })}
            </section>
        </div>
    )
}

export default Data;