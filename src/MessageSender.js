
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import React, { useState } from 'react'
import './MessageSender.css'



function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    }

return (
    <div className = "messageSender">
        <div className = "messageSender__top">
            <Avatar 
                    src = ""

            />
            <form>
                <input 
                    className = "messageSender__input"
                    placeholder = {`What's on your mind, ?`}
                />
                <input 
                    placeholder = "image URL (optional)"
                />
                <button onClick = "" type = "submit">Hidden Submit</button>
            </form>
        </div>
        <div className = "messageSender__bottom">
             <div className = "messageSender__options">
                <VideocamIcon style = {{ color: "red"}}/>
                <h3>Live video</h3>
             </div>
             <div className = "messageSender__options">
                <PhotoLibraryIcon style = {{ color: "green"}} />
                <h3>Photo/Video</h3>
             </div>
             <div className = "messageSender__options">
                <InsertEmoticonIcon style = {{ color: "orange"}}/>
                <h3>Feeling/Activity</h3>
             </div>        
        </div>
    </div>
)
}

export default MessageSender
