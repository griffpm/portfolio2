import React from 'react'
import { DataFormations } from "../data/DataFormations";
import CardFormation from "../cards/CardFormation";
import CardEmploi from "../cards/CardEmploi";
import { DataEmployement } from "../data/DataEmployement";

export default function Moi() {
  return (
    <div id="moi">
                    <h3>Mes diplomes</h3>
                    <div id="degree">{/* liste des formation que j'ai effectuer */}
                        {
                            DataFormations.map((item)=>(
                                <CardFormation
                                    nom={item.nom}
                                    year={item.year}
                                    place={item.place}
                                    key={item.id}
                                />
                            ))
                        }
                    </div>
                    <h3 className="mt-12 mb-2">Mes partenariats</h3>{/* liste des entreprise avec lesquels j'ai deja travailler */}
                    <div id="jobs">
                        {
                            DataEmployement.map((item)=>(
                                <CardEmploi 
                                entreprise={item.entreprise} 
                                urlEntreprise={item.urlEntreprise} 
                                date1={item.date1} 
                                date2={item.date2} 
                                post={item.post}
                                key={item.id}/>
                            ))
                        }
                    </div>
                    
                </div>
  )
}
