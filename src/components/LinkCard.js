import React from 'react';

function LinkCard({link, refreshLinks}) {

    const handleArchiveLink = async () => {
        link.archived = !link.archived;
        try {
            await fetch('/.netlify/functions/updateLinks', {
                method: 'PUT',
                body: JSON.stringify(link)
            });
            refreshLinks();
        } catch (err) {
            console.error('Archive Link', err)
        }
    }

    const handleDeleteLink = async () => {
        const id= link._id;
        try {
            await fetch('/.netlify/functions/deleteLinks', {
                method: 'DELETE',
                body: JSON.stringify({id})
            });
            refreshLinks();
        } catch (err) {
            console.error('Delete Link', err)
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-header">
                {link.name}
            </div>
            <div className="card-body">
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning mr-2" onClick={handleArchiveLink}>
                    {link.archived ? 'Un Archive' : 'Archive'}
                </button>
                <button className="btn btn-danger" onClick={handleDeleteLink}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default LinkCard;
