import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { triggerSearch } from '../../redux/sliceSetButtonTrigger'
import Title from '../Title';
import Search from '../Search';

export default function Navbar() {
    const dispatch = useDispatch();
    const stateButtonTrigger = useSelector((state) => state.buttonTriggerSearch.value);
    const changeStateButtonTrigger = () => { dispatch(triggerSearch()) };

    return (
        <nav className=' flex gap-5 justify-center items-center flex-col flex-col lg:flex-row lg:justify-evenly p-5 text-sky-600	'>
            <Title/>
            <Search stateButtonTrigger={stateButtonTrigger} changeStateButtonTrigger={changeStateButtonTrigger}/>
        </nav>
    )
}
