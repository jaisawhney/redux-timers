import {useSelector} from "react-redux";
import {RootState} from "../app/app";
import TimerView from "./TimerView";

export default function ListTimers() {
    const timers = useSelector((state: RootState) => state.timers.value);

    return (
        <div>
            {timers.map((timer, i) => (
                <TimerView key={i} timer={timer} idx={i}/>
            ))}
        </div>
    )
}