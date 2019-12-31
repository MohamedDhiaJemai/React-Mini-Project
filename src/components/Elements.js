import React, { Component } from 'react';

function Elements (propos) {

    return (
        <tr scope="row">
            <td>{propos.val.imdb_id}</td>
            <td>{propos.val.episodes}</td>
            <td>{propos.val.next_episode}</td>
            <td>{propos.val.title}</td>
            <td>{propos.val.last_episode}</td>
            <td>{propos.val.epguides_url}</td>
            <td>{propos.val.epguide_name}</td>
        </tr>
    );

}

export default Elements;