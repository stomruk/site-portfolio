import React from "react";

function Langprog(){
    return(
        <div>
            <h1>Languages Programmation</h1>
            <div className="skillSection"> 
                <div class="snes-form-group">
                    <label>PHP</label>
                        <input
                            value="60"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
                <div class="snes-form-group">
                    <label>Javascript</label>
                        <input
                            value="60"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
                <div class="snes-form-group">
                    <label>C#</label>
                        <input
                            value="40"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
            </div>
        </div>
    )
};

export default Langprog