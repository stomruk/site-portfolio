import React, { useImperativeHandle, forwardRef, useState } from 'react';
import Bacpro from './Bacpro';
import Devweb from './Devweb';

const Education = forwardRef((props, ref) => {

   
    let contents = [Bacpro, Devweb]

    const [num, setNum] = useState(0)
    
    const [content, setContent] = useState(Bacpro);


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
        <div className="edSection">
            {content}
        </div>
    )
})

export default Education;


