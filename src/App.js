import React,{useState} from 'react';
import axios from 'axios';

const App = () => {
    const [data,setData] = useState();
    const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(respon => {
            setData(respon.data);
        });
    }
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data,null,1)} readOnly={true} />}
        </div>
    )
}

export default App;
