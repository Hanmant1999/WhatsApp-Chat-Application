import React from 'react';
import {LeftComponent} from "../LeftComponent/LeftComponent";
import {MainLayOut} from '../MainLayout/MainLayOut';
import MiddlePortion from '../MiddlePortion/MiddlePortion';
import {RightComponent} from '../RightComponent/RightComponent';

export function Home() {
    return (
        <div>
            <MainLayOut left={<LeftComponent />} right={<RightComponent/>} /> 
        </div>
    );
}
