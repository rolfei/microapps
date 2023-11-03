import {useState} from "react";
export const Counter = () => {

    const [count,setCount] = useState(0);


    const onIncrement= (e) => {
        e.preventDefault();
        setCount(count +1);
    }

    const onDecrement= (e) => {
        e.preventDefault();
        setCount(count -1);
    }



    return (
        <div>
            <h1 class="text-4xl font-bold text-center text-gray-800 my-4">Counter component example loaded remotely from microapp2</h1>
            Current Counter: {count}
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onIncrement}>increase +</button>
            <br />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={onDecrement}>decrease +</button>

        </div>

    );

}