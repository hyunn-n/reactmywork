import React, { useState } from 'react';
import './Say.css';
import './SassComponent.scss';

const Say = () => {
    
    const [number, setNumber] = useState(0);
    const [msg, setMsg] = useState('메세지 없음');

    const onClickEnter = () => {
        setMsg('안녕하세요~ 입장하실게요~');
    };
    const onClickLeave = () => {
        setMsg('안녕히가세요!');
    };

    return (
        <div>   
            <h1 className='SassComponent'>{msg}</h1>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
        </div>
    );
};

export default Say;