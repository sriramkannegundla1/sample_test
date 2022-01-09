import React from 'react';
import Like from "./Like";
import data from "../static.json";
import axios from "axios";
import {useDispatch} from "react-redux";
import {action} from "../store/datastore";
import {useEffect} from "react";

function App(){
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get("http://localhost:6478/api/all")
          .then(res => {
            if (res.data.length === 0) {
              axios.post("http://localhost:6478/api/create")
              .then(res => dispatch(action.count(res.data)))
              .catch(err => console.log("error in initialising data",err))
              
            }
            else
              {
                console.log(res.data)
                dispatch(action.count(res.data))}
              
            axios.put("http://localhost:6478/api/update",
              {views:res.data[0].views+1,id:res.data[0].id})
            })
          .catch(err => console.log("error in loading data",err))
      },[dispatch])
    return (
    <div className="whole"  >
        <div className='inbox'>
            <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33LGxfiPgLPPxpQSuXG6TTRLyV7UTmDzUdw&usqp=CAU" alt="" />
            </div>
            <div className='inboxtext'>
                <p>{data.name}</p>
                <div className='inboxtext2'>
                    <p>{data.profession} {data.place}</p>
                </div>
            </div>
        </div>
        <div>
            <p>{data.detail}</p>
            <p>{data.description}</p>
        </div>
        <Like />
    </div>);
}
export default App;