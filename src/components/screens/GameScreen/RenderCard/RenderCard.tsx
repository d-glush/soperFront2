import React from 'react';
import './RenderCard.css';

import { ReactComponent as Mine } from '../../../../assets/im9.svg';
import mine from '../../../../assets/im9.png';
import flag from '../../../../assets/flag.png';


type RenderCardProps = {
    status: number;
    value: number;
}

const RenderCard: React.FC<RenderCardProps> = ({ value, status }) => {
    if (status === 1) {
        if (value === 1) {
            return (
                <div className="block nth1">1</div>
            )
        } else if (value === 0) {
            return (
                <div className="block"></div>
            )
        } 
        else if (value === 2) {
            return (
                <div className="block nth2">2</div>
            )
        }else if (value === 3) {
            return (
                <div className="block nth3">3</div>
            )
        } else if (value === 4) {
            return (
                <div className="block nth4">4</div>
            )
        } else if (value === 5) {
            return (
                <div className="block nth5">5</div>
            )
        }
        else if (value === 6) {
            return (
                <div className="block nth6">6</div>
            )
        }
        else if (value === 7) {
            return (
                <div className="block nth7">7</div>
            )
        }
        else if (value === 8) {
            return (
                <div className="block nth8">3</div>
            )
        }
        else if (value === 99) {
            return (
                <img className="block" src={mine} alt="e" />
            )
        }
    }
    if (status === 2){
        return (
            <img className="block" src={flag} alt="flag" />
        )
    }
    return (
        <div></div>
    )
};

export default RenderCard;