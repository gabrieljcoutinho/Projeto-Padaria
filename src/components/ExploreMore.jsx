import React from 'react'
import "../Css/exploremore.css"

import exploreMore1 from "../img/exploreMore1.png"
import exploreMore2 from "../img/exploreMore2.png"
import exploreMore3 from "../img/exploreMore3.png"
import exploreMore4 from "../img/exploreMore4.png"
import exploreMore5 from "../img/exploreMore5.png"
import exploreMore6 from "../img/exploreMore6.png"


const ExploreMore = () => {
  return (
    <div className='exploreMore'>

                <h4 className='tituloSectionExploreMore'>Explore More</h4>


                <ul className="listaTopicosDeComidas">

                        <li className="listaExploreMoreFoods"><a href="" className="linksTopicosComidaExploreMore">Cake</a></li>
                        <li className="listaExploreMoreFoods">Muffins<a href="" className="linksTopicosComidaExploreMore"></a></li>
                        <li className="listaExploreMoreFoods">Croissant<a href="" className="linksTopicosComidaExploreMore"></a></li>
                        <li className="listaExploreMoreFoods">Bread<a href="" className="linksTopicosComidaExploreMore"></a></li>
                        <li className="listaExploreMoreFoods">Tart<a href="" className="linksTopicosComidaExploreMore"></a></li>
                        <li className="listaExploreMoreFoods">Favorite<a href="" className="linksTopicosComidaExploreMore"></a></li>

                </ul>


                <div className="moreConteudoShop">

                                <div className="pratos">
                                            <img src={exploreMore1} alt="" className="imgExploreMore" />
                                </div>


                                <div className="pratos">
       <img src={exploreMore2} alt="" className="imgExploreMore" />
                                    </div>

                                    <div className="pratos">
                    <img src={exploreMore3} alt="" className="imgExploreMore" />
                                    </div>


                </div>

                <div className="moreConteudoShop">

                                <div className="pratos">
                                <img src={exploreMore4} alt="" className="imgExploreMore" />
                                </div>


                                <div className="pratos">
                                <img src={exploreMore5} alt="" className="imgExploreMore" />
                                    </div>

                                    <div className="pratos">
                                    <img src={exploreMore6} alt="" className="imgExploreMore" />
                                    </div>


                </div>

    </div>
  )
}

export default ExploreMore