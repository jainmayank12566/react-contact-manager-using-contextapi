import { useEffect } from 'react';
import {Set} from './context/Counter';
function App(){
    const{data,setdata,activity,setactivity,obj}=Set();
    useEffect(()=>{
        const result=localStorage.getItem("contacts");
        const result2=JSON.parse(result);
        setactivity(result2 || []);
    },[]);
    useEffect(()=>{
        localStorage.setItem("contacts",JSON.stringify(activity));
    },[activity]);
    function handledata(e){
        setdata(()=>{
            const result=({...data,[e.target.name]:e.target.value});
            return result;
        })
    }
    function handleclick(){
        if(data.name===""||data.email===""){
            alert("enter data");
        }
        else{
            setactivity(()=>{
                const result=([...activity,data]);
                console.log(result);
                setdata(obj);
                return result;
            })
        }
    }
    function remove(email){
        setactivity(()=>{
            const result=activity.filter((val,index)=>{
                return val.email!==email;
            })
            return result;
        })
    }
    function removeall(){
        setactivity([]);
    }
    return(
        <div>
            <input type="text" name='name' placeholder="name" value={data.name} onChange={handledata}/>
            <input type="email" name='email' placeholder="email" value={data.email} onChange={handledata}/>
            <button onClick={handleclick}>add</button>
            {activity && activity.map((val,index)=>{
                return(
                    <div key={val.email}>
                        {val.name}-{val.email}
                        <button onClick={()=>remove(val.email)}>remove</button>
                    </div>
                )
            })}
            {activity.length>=1 && <button onClick={removeall}>removeall</button>}
        </div>
    )
}
export default App;