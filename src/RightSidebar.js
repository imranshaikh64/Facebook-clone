import React from "react";
import './css/right.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';


const RightSidebar = () => {
    return (
        <>
            <div className='widget'>
                <div className='widget_header'>
                    <div className='widget_headerLeft'>
                        <h4>Your Pages</h4>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className='widget_body'>
                    <div className='widget_bodyOptions'>
                        <Avatar src='https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"' />
                        <h4>Newton School</h4>
                    </div>
                    <div className='widget_bodyOptions mll0'>
                        <NotificationsNoneIcon />
                        <p>1 Notification</p>
                    </div>
                    <div className='widget_bodyOptions mll0'>
                        <VolumeUpIcon />
                        <p>Create Promotions</p>
                    </div>
                </div>


                <hr /><br />

                <div className='widget_header'>
                    <div className='widget_headerLeft'>
                        <h4>Contacts</h4>
                    </div>
                    <div className='widget_headerRight'>
                        <VideoCallIcon />
                        <SearchIcon />
                        <MoreHorizIcon />
                    </div>

                </div>
                
                <div className='widget_body'>
                    <div className='widget_bodyOptions'>
                        <Avatar src='https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='icon' />
                        <h4>Nihal</h4>
                    </div>
                    
                </div>
                <div className='widget_body'>
                    <div className='widget_bodyOptions'>
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhHlya-3psh4gxm2-tPeoXDPlVB_AnaRMzg&usqp=CAU' />
                        <h4>Sameer</h4>
                    </div>
                    
                </div>
                <div className='widget_body'>
                    <div className='widget_bodyOptions'>
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5KLVHq7InWRffa2yDvFIPTDB-sL0vbK_Gg&usqp=CAU' />
                        <h4>Chris</h4>
                    </div>
                    
                </div>
                <div className='widget_body'>
                    <div className='widget_bodyOptions'>
                        <Avatar src='data:image/jpeg;base64,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' />
                        <h4>David </h4>
                    </div>
                    
                </div>
                <div className='widget_body'>
                    <div className='widget_bodyOptions'>
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X55SY3RrRyc_MYzbc4LC55jga-kkWG2ZtA&usqp=CAU' />
                        <h4>Sara</h4>
                    </div>
                    
                </div>

            </div>

        </>
    );
}

export default RightSidebar;