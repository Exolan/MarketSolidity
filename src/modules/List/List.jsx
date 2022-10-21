import { NavLink } from "react-router-dom"

function List({array}){
    return(
        <div className="list">
            <nav>
                {array.map((element, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={element}>{element}</NavLink>
                        </li>
                    )
                })}
            </nav>
        </div>
    )
}

export default List