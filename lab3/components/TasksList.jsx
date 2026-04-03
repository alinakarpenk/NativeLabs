import {Ionicons} from "@expo/vector-icons";
import {Progress, Title, ViewStyled} from "./styled/ChallengeStyled";

const taskTitles = {
    clicks: "Tap 10 times",
    doubleClicks: "Double-tap 5 times",
    longPress: "Long press (3 seconds)",
    swipeRight: "Swipe right",
    swipeLeft: "Swipe left",
    pinch: "Pinch to resize",
}

export default function TasksList({id, current, goal}) {
    return (

        <ViewStyled style={{ padding: 10 }}>
            <Title>{taskTitles[id]}</Title>

            <Progress>{current} / {goal}</Progress>

            <Ionicons
                name={current >= goal ? "checkmark-circle" : "close-circle"}
                size={24}
                color={current >= goal ? "#4CAF50" : "#F44336"}
            />
        </ViewStyled>

    )
}