import {useDispatch} from 'react-redux';
import {removeTimer, toggleTimer} from '../features/timers/timersSlice';
import formatTime from '../utils/formatTime';

interface Props {
    timer: {
        name: string;
        description: string;
        time: number;
        isRunning: boolean;
    },
    idx: number
}

export default function TimerView(props: Props) {
    const {timer, idx} = props;
    const dispatch = useDispatch();

    return (
        <div className={'grid grid-cols-[auto,1fr,min-content] my-4 gap-5'}>
            <div className={'break-all'}>
                <h1 className={'text-lg font-bold'}>{timer.name}</h1>
                <p className={'text-sm text-gray-600'}>{timer.description}</p>
            </div>

            <p className={'text-md justify-self-end self-center'}>{formatTime(timer.time)}</p>
            <div className={'flex gap-2 items-center text-sm'}>
                <button
                    className={'rounded-lg font-bold m-0 px-1.5 py-0.5 bg-black text-white'}
                    onClick={() => dispatch(toggleTimer(idx))}
                >
                    {timer.isRunning ? 'Stop' : 'Start'}
                </button>
                <button
                    className={'rounded-lg font-bold m-0 px-1.5 py-0.5 bg-black text-white'}
                    onClick={() => dispatch(removeTimer(idx))}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}