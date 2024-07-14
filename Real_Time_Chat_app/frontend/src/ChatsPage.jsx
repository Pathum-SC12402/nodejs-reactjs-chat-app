import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '0a826b7a-fe07-4eea-a24e-8a2da5bd5d16', // Replace with your actual Chat ID
        props.user.username, // Assuming props.user.username is correctly passed
        props.user.secret // Assuming props.user.secret is correctly passed
    );

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <MultiChatSocket {...chatProps} />
            <div style={{ flex: 1, overflowY: 'auto' }}>
            <MultiChatWindow {...chatProps} />
            </div>
        </div>
    );
};

export default ChatsPage;
