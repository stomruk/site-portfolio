import React, { useImperativeHandle, forwardRef, useState } from 'react';
import Amiltone from './Amiltone';
import Lidl from './Lidl';
import Sofielca from './Sofielca';
import './Experience.css';

const Experience = forwardRef((props, ref) => {

   
    let contents = [Amiltone, Lidl, Sofielca]

    const [content, setContent] = useState(Amiltone);
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
        <div className="expSection">
            {content}
        </div>
    )
})

export default Experience;


