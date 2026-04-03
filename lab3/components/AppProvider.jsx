import {createContext, useContext, useState} from "react";

const AppContext = createContext()

export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {
    const [score, setScore] = useState(0)

    const [tasks, setTasks] = useState({
        clicks: { current: 0, goal: 10 },
        doubleClicks: { current: 0, goal: 5 },
        longPress: { current: 0, goal: 1 },
        swipeRight: { current: 0, goal: 1 },
        swipeLeft: { current: 0, goal: 1 },
        pinch: { current: 0, goal: 1 },
        rotation: { current: 0, goal: 1 },
    })

    return (
        <AppContext.Provider value={{score, tasks, setScore, setTasks}}>
            {children}
            </AppContext.Provider>
    )
}