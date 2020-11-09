import * as React from 'react';
import LayOut from "../../component/layout";
import {useState, useEffect, memo} from 'react';
import axios from 'axios'
import Posts from "../../component/posts";
import Pagination from "../../component/pagination";

export interface Prop{
    postsPerPage:number,
    totalPosts:number,
    paginate:any,
    current:number
}
const Paging:React.FC=memo(()=>{

    console.log('render')
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect( ()=>{
        const fetch=async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        }
        fetch();
        console.log(posts)
    },[currentPage,postsPerPage]);

    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    const indexOfLast:number = currentPage * postsPerPage;
    const indexOfFirst:number = indexOfLast - postsPerPage;
    const currentPost = posts.slice(indexOfFirst, indexOfLast);

    return(
        <div className="container">
            <LayOut/>
            <section className="pgpg">
                <div className="postC">
                    <h2 className="data-info">100개의 데이터를 비동기 페이징 처리</h2>
                    <table className="pagingTable">
                        <thead>
                        <tr>
                            <th>Post Num</th>
                            <th>Post Content</th>
                        </tr>
                        </thead>
                        <tbody>
                            {currentPost.map((x,y)=>{
                                return <Posts posts={x} key={y} />
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage} current={currentPage}/>
            </section>
        </div>
    )
})

export default memo(Paging);