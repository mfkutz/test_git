import PropTypes from "prop-types";
import { createContext } from "react";

export const ActivityContext = createContext()

export const ActivityProvider = ({children}) => {
    const blue = "blue from context API"

    return (
        <ActivityContext.Provider value={{blue}}>
            {children}
        </ActivityContext.Provider>
    )
}

ActivityProvider.propTypes = {
    children: PropTypes.node.isRequired
};