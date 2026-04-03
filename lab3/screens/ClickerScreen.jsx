import {Directions, Gesture, GestureDetector} from "react-native-gesture-handler";
import {useRef, useState} from "react";
import {
    ButtonClicker,
    CircleText,
    Clicker,
    Container, InfoText,
    Panel,
    Score,
    Title,
    Value
} from "../components/styled/ClickerStyle";
import { Animated } from "react-native";
import {useClikerFunctions} from "../hooks/useClikerFunctions";
import {useApp} from "../components/AppProvider";

const AnimatedButtonClicker = Animated.createAnimatedComponent(ButtonClicker);

export default function ClickerScreen() {

    const {score, setScore, setTasks} = useApp()

    const {longPress, flingRight, flingLeft, tap, doubleTap, pinchGesture, scale, rotation, rotate, pan, translateX, translateY} = useClikerFunctions(setScore, setTasks)

    const taps = Gesture.Exclusive(doubleTap, tap);

    const composed = Gesture.Simultaneous(longPress, taps, flingRight, flingLeft, pinchGesture, rotation, pan)

    return (
        <Clicker>
            <Score>
                <Title>SCORE:</Title>
                <Value>{score}</Value>
            </Score>
            <Container>
                <GestureDetector gesture={composed}>
                    <AnimatedButtonClicker style={{ transform: [{ scale }, {rotate}, {translateX}, {translateY}] }}>
                <CircleText>
                    Tap me
                </CircleText>
                    </AnimatedButtonClicker>
                </GestureDetector>
                </Container>

            <Panel>
                <InfoText>Tap: +1 point</InfoText>
                <InfoText>Double-tap: +2 points</InfoText>
                <InfoText>Long-press: +3 points</InfoText>
                <InfoText>Swipe: +1-10 random points</InfoText>
                <InfoText>Pinch: +3 points</InfoText>
            </Panel>

        </Clicker>
    );
}

