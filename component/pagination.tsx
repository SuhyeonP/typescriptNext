import * as React from 'react';
import {Prop} from "../pages/mass/paging";
import {useState} from "react";


const Pagination:React.FC<Prop> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="pgbS">
                <ul className="pgb">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <span onClick={()=>paginate(number)} className="page-link">
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Pagination;