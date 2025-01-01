import React from "react";

function Framework(){
    return(
        <div>
            <h1>Frameworks</h1>
            <div className="skillSection"> 
                <div class="snes-form-group">
                    <label>Symfony</label>
                        <input
                            value="80"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
                <div class="snes-form-group">
                    <label>React</label>
                        <input
                            value="60"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
                <div class="snes-form-group">
                    <label>Angular</label>
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

export default Framework