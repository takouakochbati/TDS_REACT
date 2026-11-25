
import style from "./Destination.module.css";
import {useState} from "react"
function Destination({ image, titre, pays, description, prix }) {
    const [afficher,setAfficher]=useState(false);

    function swap(){
        setAfficher(!afficher);
    }
    return (
        <div className={style.destination}>

            <img
                src={image}
                alt={titre}
                className={style.image}
            />

            <h2 className={style.titre}>{titre}</h2>

            <p className={style.pays}>{pays}</p>

           
            {afficher && <p className={style.description}>
                {description}
            </p>
            }
            <h3 className={style.prix}>{prix} DT</h3>
            <button onClick={swap}>
                {afficher ? "Masque" : "afficher"}
            </button>

        </div>
    );
}

export default Destination;
