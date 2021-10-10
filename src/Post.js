import React from "react";
import './css/post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

const Post = (props) => {
    return (
        <>
            <div className='post'>
                <div className='post_top'>
                    <div className='post_topLeft'>
                        <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQG4ueORgcXhDg/profile-displayphoto-shrink_100_100/0/1569761840069?e=1639612800&v=beta&t=fbbeZG1e2zh-nQFIkWlskOFuN8QZTVDmDDAPonOkuC4"/>
                        <div className='postInfo'>
                            <h4>{props.username}</h4>
                            <p>{props.timestamp} <PublicIcon /></p>
                        </div>

                    </div>
                    <MoreHorizIcon />

                </div>

                <div className='post_middle'>
                    <p>
                        {props.message}
                    </p>
                    {props.image && <img src={props.image}/>}
                    
                </div>

                <div className='post_bottom'>
                    <div className='post_bottomOptions'>
                        <ThumbUpIcon /><p>Like</p>
                    </div>
                    <div className='post_bottomOptions'>
                        <ChatBubbleOutlineIcon /><p>Comment</p>
                    </div>
                    <div className='post_bottomOptions'>
                        <ShareIcon /><p>Share</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Post;