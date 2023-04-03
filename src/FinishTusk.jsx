import React from 'react';

const FinishTusk = ({tusk, index}) => {
    return (
        <div className={'oneTusk'}>
            <div>
                <div>{index + 1}.{tusk.userName} решил {tusk.numQuest}</div>
                <div>Нужно {tusk.title}</div>
            </div>
        </div>
    );
};

export default FinishTusk;