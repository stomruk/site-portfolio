import React from "react";

function Gameengine(){
    return(
        <div>
            <h1>Game Engines</h1>
            <div className="skillSection"> 
                <div class="snes-form-group">
                    <label>Godot</label>
                        <input
                            value="90"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
                <div class="snes-form-group">
                    <label>Unity</label>
                        <input
                            value="50"
                            disabled="true"
                            type="range"
                            class="rangeStuff snes-range has-soft-green-thumb"
                            min="0"
                            max="100"/>
                </div>
                <div class="snes-form-group">
                    <label>Unreal Engine</label>
                        <input
                            value="20"
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

export default Gameengine