import * as React from 'react';

interface Prop{
    posts: {
        id:string,
        name:string,
        content:string
    }
}

const DummyPost:React.FunctionComponent<Prop>=({posts})=>{
    return(
        <>
            <div>
                <p className="user-iD">id : {posts.id}&nbsp;/&nbsp;name : {posts.name}</p>
                <p className="user-c">{posts.content}</p>
            </div>
        </>
    )
}

export default DummyPost;