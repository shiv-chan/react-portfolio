import React from 'react';
import projectsData from './projectsData';

export const projectsDataContext = React.createContext();

function ContextProvider({ children }) {
	return (
		<projectsDataContext.Provider value={projectsData}>
			{children}
		</projectsDataContext.Provider>
	);
}

export default ContextProvider;
