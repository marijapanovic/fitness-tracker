import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
    return (
        <>
                <div className="headerWellcome">
                   <h1>Wellcome!</h1>
                   <p>Overview of your activity</p>
                </div>
                <div className="headerDays">
                    <ul>
                      
                        <li>
                            <Link to='/day/:name'> 
                                <b>10</b><br/>
                                <b>MON</b> 
                            </Link>
                        </li>
                            {/* <i className="material-icons right"></i> */}
                        <li>
                            <Link to='/'>
                                <b>11</b><br/>
                                <b>THU</b>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <b>12</b><br/>
                                <b>WED</b>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <b>13</b><br/>
                                <b>THU</b>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <b>14</b><br/>
                                <b>FRI</b>
                            </Link>
                        </li>
                    </ul>
                </div>

        </>
    )
}
export default Header;