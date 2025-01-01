import React, { useImperativeHandle, forwardRef, useState } from 'react';

const Project = forwardRef((props, ref) => {

   
    let contents = ["Project 1", "Project 2", "Project 3"]

    const [content, setContent] = useState("Project 1");
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

export default Project;


