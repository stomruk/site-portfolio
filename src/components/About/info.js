import React from "react";
import photo from "../../img/photo.jpg"

function info(){
    return(
        <div className="aboutSection">
            <h2>About</h2>
            <img className="photo" src={photo}></img>
            <p class="text-nature-color">Bonjour ! C’est Suleyman. Je suis un développeur passionné par la création de solutions innovantes. Mon intérêt pour le développement web me pousse constamment à découvrir de nouvelles choses. En particulier, le développement de jeux vidéo est un domaine qui me tient à cœur, car il combine ma créativité et mes compétences techniques de manière unique.</p>
        </div>
    )
};

export default info