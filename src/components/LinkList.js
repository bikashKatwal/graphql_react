import React from 'react';
import LinkCard from "./LinkCard";

function LinkList({links, refreshLinks}) {
    return (
        <div>
            <h2 className="my-4">Links</h2>
            {links.length>0 && links.map((link)=> <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}/>)}
        </div>
    );
}

export default LinkList;
