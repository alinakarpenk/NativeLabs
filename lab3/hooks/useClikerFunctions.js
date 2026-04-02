import {Directions, Gesture} from "react-native-gesture-handler";
import {useRef} from "react";
import {Animated} from "react-native";

export function useClikerFunctions(setScore, setTasks) {

    const randomPoints = Math.floor(Math.random() * 10) + 1

    const scale = useRef(new Animated.Value(1)).current

    const lastScale = useRef(1)

    const rotation = Gesture.Rotation()
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 10)
        })

    const longPress = Gesture.LongPress()
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 3)
            setTasks(prevTasks => ({
                ...prevTasks,
                longPress: {
                    ...prevTasks.longPress,
                    current: prevTasks.longPress.current + 1
                }
            }))
        })

    const tap = Gesture.Tap()
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 1)
            setTasks(prevTasks => ({
                ...prevTasks,
                clicks: {
                    ...prevTasks.clicks,
                    current: prevTasks.clicks.current + 1
                }
            }))
        })

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .runOnJS(true)
        .onEnd(() => {
            setScore(s => s + 2)
            setTasks(prevTasks => ({
                ...prevTasks,
                doubleClicks: {
                    ...prevTasks.doubleClicks,
                    current: prevTasks.doubleClicks.current + 1
                }
            }))
        })

    const flingRight = Gesture.Fling()
        .direction(Directions.RIGHT)
        .runOnJS(true)
        .onStart(() => {
            setScore(s => s + randomPoints)
            setTasks(prevTasks => ({
                ...prevTasks,
                swipeRight: {
                    ...prevTasks.swipeRight,
                    current: prevTasks.swipeRight.current + 1
                }
            }))
        })

    const flingLeft = Gesture.Fling()
        .direction(Directions.LEFT)
        .runOnJS(true)
        .onStart(() => {
            setScore(s => s + randomPoints)
            setTasks(prevTasks => ({
                ...prevTasks,
                swipeLeft: {
                    ...prevTasks.swipeLeft,
                    current: prevTasks.swipeLeft.current + 1
                }
            }))
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
            setTasks(prevTasks => ({
                ...prevTasks,
                pinch: {
                    ...prevTasks.pinch,
                    current: prevTasks.pinch.current + 1
                }
            }))
        })

    return {longPress, pinchGesture, tap, doubleTap, flingLeft, flingRight, scale, rotation}

}
