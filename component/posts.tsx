import *as React from 'react';
import {memo}from 'react';
interface Prop{
    posts:{
        id:string,
        title:string,
    }
}

const Posts:React.FC<Prop> = ({ posts }) => {
    return (
        <>
            <tr key={posts.id} className="pagingpost">
                <td className="pnp">{posts.id}</td>
                <td>{posts.title}</td>
            </tr>
        </>
    );
};
export default Posts;