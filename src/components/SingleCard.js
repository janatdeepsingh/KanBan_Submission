import coloredIcon from "../icons_FEtask/urgent_grey.svg"
const SingleCard=({title,ticketId,group,order,priorityLevels,userObj,statusObj,status,user,priority})=>{
    return <div style={{backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius:'5%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.15)',padding:"3px",margin:"3px",height:"20vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}
        >
            <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"4px",paddingRight:"4px",paddingBottom:"0",marginBottom:"0px"}}>
        <span style={{fontWeight:"lighter",fontSize:"smaller"}}>{ticketId}</span>
        {group!=="user" && <img src={userObj[user].path}/>}
        </div>
        <div style={{display:"flex",paddingTop:"0px",marginTop:"0px"}}>
        {group!=="status" && <img src={statusObj[status].path}/>}
        <h5 style={{fontWeight:"550",marginLeft:"2px",marginRight:"2px"}}>{title}</h5>
        </div>
        <div style={{display:"flex",paddingTop:"0px",marginTop:"0px"}}>
        {(group!=="priority" && priority!==4) && <img src={priorityLevels[priority].path}/>}
        {(group!=="priority" && priority===4) && <img src={coloredIcon}/>}
        <span style={{fontWeight:"lighter",color:"gray",marginLeft:"2px",fontSize:"smaller"}}>Feature Request</span>
        </div>
    </div>
}
export default SingleCard;