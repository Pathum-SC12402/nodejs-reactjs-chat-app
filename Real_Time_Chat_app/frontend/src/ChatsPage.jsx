import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'add prject ID', // Replace with your actual Chat ID
        props.user.username, // Assuming props.user.username is correctly passed
        props.user.secret // Assuming props.user.secret is correctly passed
    );

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <MultiChatSocket {...chatProps} />
                <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    );
};

export default ChatsPage;
