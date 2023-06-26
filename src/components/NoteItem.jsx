import React from 'react';
import PropType from 'prop-types';
import NoteItemBody from './NoteItemBody';
import NoteItemFooter from './NoteItemFooter';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <div className="note-items">
            <div className="note-item">
                <NoteItemBody title={title} body={body} createdAt={createdAt} />
                <NoteItemFooter
                    id={id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            </div>
        </div>
    );
}

NoteItem.propType = {
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
    id: PropType.number.isRequired,
    onDelete: PropType.func.isRequired,
    onArchive: PropType.func.isRequired,
};

export default NoteItem;
