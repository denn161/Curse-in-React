import React from 'react';
import styles from './Message.module.css';

const Message = ({text}) => {
    return (
        <div >
        <p className={styles.text}>{text}</p>
            
        </div>
    );
};

export default Message;


