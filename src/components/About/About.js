import React, { useImperativeHandle, forwardRef, useState } from 'react';
import info from './info';
import Lang from './Lang';
import Hobby from './Hobby';
import "./About.css"

const About = forwardRef((props, ref) => {

   
    let contents = [info, Lang, Hobby]

    const [content, setContent] = useState(info);
    const [num, setNum] = useState(0)



    let leftArrow = () => {
        let newNum = (num - 1+contents.length)%contents.length;
        setNum(newNum);
        setContent(contents[newNum])
    };

    let rightArrow = () => {
        let newNum = (num + 1)%contents.length;
        setNum(newNum);
        setContent(contents[newNum])
    }
    
    useImperativeHandle(ref, () => ({
        leftArrow,
        rightArrow
    }));
    return(
        <div className="aboutSection">
            {content}
        </div>
    )
})

export default About;


