import React, { Fragment } from "react";

import './Home.css';


const Home = () =>{

    return (
        <Fragment>
          <div className="home">
            <h3>TOURS</h3>
            <div className="table-list">
                <table>
                    <tr>
                        <td className="date">JUL 16</td>
                        <td className="street">DETROIT, MI</td>
                        <td className="address">DTE ENERGY MUSIC THEATRE</td>
                        <td className="buy"><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td className="date">JUL 19</td>
                        <td className="street">TORONTO,ON</td>
                        <td className="address">BUDWEISER STAGE</td>
                        <td className="buy"><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td className="date">JUL 22</td>
                        <td className="street">BRISTOW, VA</td>
                        <td className="address">JIGGY LUBE LIVE</td>
                        <td className="buy"><button>BUY TICKETS</button></td>
                    </tr >
                    <tr>
                        <td className="date">JUL 29</td>
                        <td className="street">PHOENIX, AZ</td>
                        <td className="address">AK-CHIN PAVILION</td>
                        <td className="buy"><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td className="date">AUG 2</td>
                        <td className="street">LAS VEGAS, NV</td>
                        <td className="address">T-MOBILE ARENA</td>
                        <td className="buy"><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td className="date">AUG 7</td>
                        <td className="street">CONCORD, CA</td>
                        <td className="address">CONCORD PAVILION</td>
                        <td className="buy"><button>BUY TICKETS</button></td>
                    </tr>
                </table>
            </div>
          </div>
    
      
        
     
     
        </Fragment>
    )
}

export default Home;