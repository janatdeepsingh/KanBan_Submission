import SingleCard from "./SingleCard";
import Adder from "../icons_FEtask/add.svg";
import Dotter from "../icons_FEtask/dropdown.svg";  
import Urgency from "../icons_FEtask/user.svg"
const ColumnMaker=({tickets,keya,priorityLevels,group,order,userObj,statusObj})=>{
    return <div style={{width:"30%",display:"flex",flexDirection:"column"}}>
            <ul style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {group==="priority" && <div style={{display:"flex",justifyContent:"space-between",fontWeight:"light"}}>
                    <img src={priorityLevels[keya].path}/>
                <h4 style={{paddingLeft:"5px",fontWeight:"500"}}>{priorityLevels[keya].type}</h4>
                </div>
                }

{group==="user" && <div style={{display:"flex",justifyContent:"space-between"}}>
                    <img src={userObj[keya].path}/>
                <h4 style={{paddingLeft:"5px",fontWeight:"500"}}>{userObj[keya].name}</h4>
                </div>
                }

{group==="status" && <div style={{display:"flex",justifyContent:"space-between"}}>
                    <img src={statusObj[keya].path}/>
                <h4 style={{paddingLeft:"5px",fontWeight:"500"}}>{statusObj[keya].name}</h4>
                </div>
                }
                <p style={{paddingLeft:"10px"}}>{tickets.length}</p>
                </div>
                <div style={{display:"flex"}}>
                    <img src={Adder}/>
                    <img src={Dotter}/>
                </div>
                </div>
                {tickets.map(ticket => (
                        <SingleCard key={ticket.id} title={ticket.title} ticketId={ticket.id} user={ticket.userId} status={ticket.status} priority={ticket.priority}  priorityLevels={priorityLevels} group={group} order={order} userObj={userObj} statusObj={statusObj}></SingleCard>
                ))}
            </ul></div>
}
export default ColumnMaker;