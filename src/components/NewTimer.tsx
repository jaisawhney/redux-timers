import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTimer} from '../features/timers/timersSlice'

export default function NewTimer() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();

    return (
        <div>
            <h1 className={'text-2xl'}>Redux Timers</h1>
            <div className={'flex justify-center pt-2'}>
                <input
                    className={'border rounded-s-lg m-0 px-2 py-0.5 grow basis-0'}
                    type='text'
                    placeholder='New Timer Name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className={'border-y m-0 px-2 py-0.5 grow basis-0'}
                    type='text'
                    placeholder='New Timer Description'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    className={'rounded-e-lg font-bold m-0 px-2 py-0.5 bg-black text-white'}
                    onClick={() => dispatch(addTimer({
                            name: name,
                            description: description
                        })
                    )}
                >
                    Save
                </button>
            </div>
        </div>
    )
}