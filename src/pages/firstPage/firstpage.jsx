import React from "react";
import FunctionalComp from './component/functionalComponent'
import {withReducer} from '@store/reducerLoader';
import reducer from './reducer';
import sagas from './sagas';

const firstPage = () => {
    return(
        <div>
            <FunctionalComp/>
        </div>
    )
}
const ReducedScreen = withReducer('counter', reducer, sagas)(firstPage);
export default ReducedScreen;