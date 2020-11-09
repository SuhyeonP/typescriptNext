import * as React from 'react';
import LayOut from "../../component/layout";
import {useEffect, useState} from "react";
import DummyPost from "../../component/dummyPost";
import * as faker from 'faker'
import * as shortId from 'shortid'

export const generateDummyPost = (number) => Array(number).fill(null).map(() => {
    return {id:shortId.generate(),name:faker.name.findName(),content:faker.lorem.paragraph()}
});



let count=1;

const DataL=()=>{
    const [hasMoreData]=useState(true);
    const [loadPost,setLoadPost]=useState(false);
    const dd=generateDummyPost(8)
    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                setTimeout(function(){setLoadPost(true);count+=1;},3000);
                if(hasMoreData&&loadPost){
                    if(count<50){
                        setTimeout(function(){
                            dd.concat(generateDummyPost(5));
                            setLoadPost(false)
                        },3000)
                    }else{
                        alert("램이 터질거같아용 ㅠㅠ ")
                    }
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
                {dd.map((x,y)=>{
                    return (
                        <div>
                            <DummyPost posts={x} key={y}/>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default DataL;