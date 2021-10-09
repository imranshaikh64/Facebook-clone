import { Avatar } from "@material-ui/core";
import React from "react";
import './css/story.css';


const Storyreel = () => {
    return (
        <>
            <div className='storyReel'>
                <div className='story' style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71+o6MI9iHL._SY550_.jpg')` }}>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnyiCBvGeZ1f47ew6AK3kiTt6d3vOaufTnQ&usqp=CAU'/>
                    <h4>Daniel</h4>
                </div>
                <div className='story' style={{ backgroundImage: `url('https://image.shutterstock.com/image-photo/portrait-young-smiling-woman-260nw-330095525.jpg')` }}>
                    <Avatar src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg' />
                    <h4>Kiara</h4>
                </div>
                <div className='story' style={{ backgroundImage: `url('https://i.pinimg.com/736x/ff/c0/9f/ffc09f14cea3c0163dfd2366e2da23a3--silk-satin.jpg')` }}>
                    <Avatar src='http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/05/Stylish-Whatsapp-Dp-Images-4-1.jpg' />
                    <h4>Sid</h4>
                </div>
                <div className='story' style={{ backgroundImage: `url('https://images.picxy.com/cache/2019/7/25/66a9431902e222c2aabfd4e3e08ea31c.jpg')` }}>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--Z1FSRJFAbzkWUQ9N8ZWTGxPWZhcQu28lQ&usqp=CAU'/>
                    <h4>Steve</h4>
                </div>
                <div className='story' style={{ backgroundImage: `url('https://static.fibre2fashion.com/articleresources/images/87/8609/fashion%20women-small_Small.jpg')` }}>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWuVQ_JqqiISyDr96GzOWs5CM27_KRsBNt2Q&usqp=CAU' />
                    <h4>Natasha</h4>
                </div>


            </div>

        </>
    );
}

export default Storyreel;
