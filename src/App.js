
import './App.css';
import { useEffect, useState } from "react";
import  Navbar from './components/Navbar';
import Main from './components/Main';
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [order, setOrder] = useState(() => {
    return localStorage.getItem("order") || "title";
});
const [group, setGroup] = useState(() => {
    return localStorage.getItem("group") || "priority";
});
  const [loader,setLoader]=useState(false);
  const priorityLevels = {
    4: {type:"Urgent",path:require("./icons_FEtask/urgent.svg").default},
    3: {type:"High",path:require("./icons_FEtask/high_priority.svg").default},
    2: {type:"Medium",path:require("./icons_FEtask/mid_priority.svg").default},
    1: {type:"Low",path:require("./icons_FEtask/low_priority.svg").default},
    0: {type:"No Priority",path:require("./icons_FEtask/No-priority.svg").default}
};
const userObj={
  "usr-1": { name: "Anoop Sharma",path:require("./icons_FEtask/user.svg").default },
  "usr-2": { name: "Yogesh",path:require("./icons_FEtask/user.svg").default },
  "usr-3": { name: "Shankar Kumar", path:require("./icons_FEtask/user.svg").default },
  "usr-4": { name: "Ramesh", path:require("./icons_FEtask/user.svg").default },
  "usr-5": { name: "Suresh",path:require("./icons_FEtask/user.svg").default }
}
const statusObj = {
  "Todo": { name: "Todo", path: require("./icons_FEtask/To-do.svg").default },
  "Done": { name: "Done", path: require("./icons_FEtask/Done.svg").default },
  "Cancelled": { name: "Cancelled", path: require("./icons_FEtask/Cancelled.svg").default },
  "In progress": { name: "In Progress", path: require("./icons_FEtask/in-progress.svg").default },
  "Backlog": { name: "Backlog", path: require("./icons_FEtask/Backlog.svg").default }
};
  const setGroupFunc=(group)=>{
    setGroup(group);
  }
  const setOrderFunc=(order)=>{
    setOrder(order);
  }
  const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const fetchTickets = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data)
    const res=await response.data;
    setData(res);
    setLoader(true);
    return ;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};
useEffect(()=>{
  fetchTickets();
},[])
useEffect(() => {
  localStorage.setItem("order", order);
}, [order]);

useEffect(() => {
  localStorage.setItem("group", group);
}, [group]);
  return (
    <div className="App" style={{backgroundColor:"#f4f5f9",height:"100%"}}>

      {!loader?<h1>Loading ...</h1>:<>     
      <Navbar setOrderFunc={setOrderFunc} setGroupFunc={setGroupFunc} group={group} order={order}></Navbar>
      <Main data={data} order={order} group={group} priorityLevels={priorityLevels} userObj={userObj} statusObj={statusObj}></Main>
      </> }
    </div>
  );
}

export default App;
