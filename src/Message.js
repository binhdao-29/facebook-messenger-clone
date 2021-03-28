import React, {forwardRef} from 'react';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef((props, ref) => {
    const {username, message} = props;
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard" }>
                <CardContent>
                    <Typography variant="h5" component="h2" color="white">
                        {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;
