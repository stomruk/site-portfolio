import React, { useImperativeHandle, forwardRef, useState } from 'react';
import './Skills.css';
import Self from './Self';
import Langprog from './Langprog';
import Framework from './Framework';
import Gameengine from './Gameengine';

const Skills = forwardRef((props, ref) => {

   
    let contents = [Self, Langprog, Framework, Gameengine]

    const [content, setContent] = useState(Self);
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
        <div className="skillsSection">
            {content}
        </div>
    )
})

export default Skills;


