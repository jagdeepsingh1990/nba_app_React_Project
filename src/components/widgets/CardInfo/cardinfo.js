import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import styles from './cardinfo.css'

const CardInfo =(props)=> {

    const teamName = (teams, team) => {
        let data = teams.find((item)=>{
            return item.teamId === team
        });
        if(data){
            return data.name
        }
    }
    const formatDate=(date)=>{
        return moment(date).format(' MM-DD-YYYY')
    }
    return(
        <div className={styles.cardInfo}>
            <span className={styles.teamName}>
                {teamName(props.teams,props.team)}
            </span>
            <span className={styles.date}>
            <FontAwesomeIcon icon={faClock} />
                {formatDate(props.date)}
            </span>
            
        </div>


    )
}
export default CardInfo;