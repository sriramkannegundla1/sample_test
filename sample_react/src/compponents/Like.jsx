import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function Like(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    let countV = useSelector(state => state.temp[0].views);

    return (
        <div>
            <p style={{"color":"gray"}}>{countV} Views | {count1} Likes | {count2} Comments | {count3} Shares</p>
            <button style={{"paddingLeft":"24px"}} onClick={()=> setCount1(count1+1)}>Like</button>
            <button onClick={()=> setCount2(count2+1)}>Comment</button>
            <button onClick={()=> setCount3(count3+1)}>Share</button>
        </div>
    );
}
export default Like ;