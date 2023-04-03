import {useDispatch} from "react-redux";
import {toggleTimer} from "../features/timers/timersSlice";

interface Props {
    timer: {
        name: string;
        time: number;
        isRunning: boolean;
    },
    idx: number
}

export default function TimerView(props: Props) {
    const {timer, idx} = props;
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{timer.name}</h1>
            <p>{timer.time}</p>
            <button
                onClick={() => dispatch(toggleTimer(idx))}
            >
                {timer.isRunning ? "Stop" : "Start"}
            </button>
        </div>
    )
}