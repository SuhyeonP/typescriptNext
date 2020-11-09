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




const Data=()=>{
    const [hasMoreData,setHasMoreData]=useState(true);
    const [loadPost,setLoadPost]=useState(false);
    const dd=generateDummyPost(10)

    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if(hasMoreData&&loadPost){
                    setTimeout(function(){dd.concat(generateDummyPost(10))},5000)
                }
                console.log(123)
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