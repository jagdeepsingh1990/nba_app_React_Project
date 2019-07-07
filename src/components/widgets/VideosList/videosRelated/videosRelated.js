import React from 'react';
import styles from '../videosList.css'
import VideosListTemplate from '../videosListTemplate';


const videsRelated =(props)=> (
    <div className={styles.relatedWrapper}>
        <VideosListTemplate
        data={props.data}
        teams={props.teams}
        />
    </div>
)
export default videsRelated;