import React from 'react';
import "./Synonyms.css";

export default function Synonyms(props){
 console.log(props.synonyms)
  if (props.synonyms.length){
    return(
      <section>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return(
                <li key={index}>
                  {synonym}
                </li>
            )
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="synonyms-none">
        <p>
        No synonyms found.
        </p>
      </section>
    );
  }
}
