import ColumnMaker from "./ColumnMaker";

const Main = ({order,group, data,priorityLevels,userObj,statusObj}) => {
    const groupTickets = (tickets, groupBy) => {
        const possibleGroups = {
            status: ["Todo", "In progress", "Backlog","Cancelled","Done"],
            priority: [4, 3, 2, 1, 0],
            user: ["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"]
        };
    
        const acc = {};
        possibleGroups[groupBy].forEach(key => {
            acc[key] = [];
        });
    
        tickets.forEach(ticket => {
            let key = ticket.status;
            if (groupBy === "priority") key = ticket.priority;
            else if (groupBy === "user") key = ticket.userId;
            if (acc[key]) {
                acc[key].push(ticket);
            }
        });
    
        return acc;
    };
    const sorter=(a,b,type)=>{
        if(type==="title")
            return a.title.localeCompare(b.title);
        else return b.priority - a.priority;
    }
    const sortedGroupedTickets = (groupedTickets,order) => {
        return Object.entries(groupedTickets).reduce((acc, [key, tickets]) => {
            const sortedTickets = tickets.sort((a, b) => sorter(a,b,order));
            acc[key] = sortedTickets;
            return acc;
        }, {});
    };
    const callerFunction=(order,group,tickets)=>{
        const groupedTickets = groupTickets(data.tickets, group);
        return sortedGroupedTickets(groupedTickets,order);
    };
    const sortedTickets = callerFunction(order,group,data.tickets); 
    return <div style={{display:"flex",padding:"15px",height:"100vh"}}>{Object.entries(sortedTickets).map(([key, tickets]) => (
        <ColumnMaker keya={key} tickets={tickets} priorityLevels={priorityLevels} group={group} order={order} userObj={userObj} statusObj={statusObj}></ColumnMaker>
    ))}</div>;
};

export default Main;