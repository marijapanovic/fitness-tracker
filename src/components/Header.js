import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = (props) => {
    return (
            <>
                <div className="generalProperties headerWellcome">
                   <h1>Wellcome!</h1>
                   <p>Overview of your activity</p>
                </div>
                <div className="headerDays">
                    <ul>
                    {Object.values(props.trainingsByDay).map((trainingsInDay) => (
                        <li key={trainingsInDay[0].getDate()} className="generalProperties">
                            <Link to={`/day/${trainingsInDay[0].getDate()}`}> 
                                <b>{trainingsInDay[0].dateTime.getDate()}</b><br/>
                                <b>{getDayOfWeek(trainingsInDay[0].dateTime)}</b> 
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </>
    )
}
export default Header;

function getDayOfWeek(date) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return days[date.getDay()]
}
