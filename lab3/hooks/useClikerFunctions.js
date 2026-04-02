import {Directions, Gesture} from "react-native-gesture-handler";
import {useRef} from "react";
import {Animated} from "react-native";

export function useClikerFunctions(setScore) {

    const randomPoints = Math.floor(Math.random() * 10) + 1

    const scale = useRef(new Animated.Value(1)).current

    const lastScale = useRef(1)

    const longPress = Gesture.LongPress()
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 3)
        })

    const tap = Gesture.Tap()
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 1)
        })

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 2)
        })

    const flingRight = Gesture.Fling()
        .direction(Directions.RIGHT)
        .runOnJS(true)
        .onStart(() => {
            setScore(s => s + randomPoints)
        })

    const flingLeft = Gesture.Fling()
        .direction(Directions.LEFT)
        .runOnJS(true)
        .onStart(() => {
            setScore(s => s + randomPoints)
        })

    const pinchGesture = Gesture.Pinch()
        .runOnJS(true)
        .onUpdate((event) => {
            scale.setValue(lastScale.current * event.scale)
        })
        .onEnd(() => {
            lastScale.current = scale._value
            Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true,
            }).start(() => {
                lastScale.current = 1
            })
            setScore(s => s + 3)
        })

    return {longPress, pinchGesture, tap, doubleTap, flingLeft, flingRight, scale}

}
