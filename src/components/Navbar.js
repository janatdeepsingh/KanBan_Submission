import { useState } from "react";
import Dropdown from "../icons_FEtask/Display.svg";
import Downarror from "../icons_FEtask/down.svg"
const Navbar = ({setOrderFunc,setGroupFunc,group,order}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const onChangeGroup=(e)=>{
        setGroupFunc(e.target.value);
        toggleDropdown();
    };
    const onChangeOrder=(e)=>{
        setOrderFunc(e.target.value);
        toggleDropdown();
    };
    return (
        <nav style={{backgroundColor:"white"}}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={toggleDropdown} style={{ margin:"5px",padding: '5px', cursor: 'pointer',backgroundColor:"white",borderRadius:"10%",borderWidth:"0.5px" }}>
                <div style={{display:"flex", justifyContent:"space-around",alignItems:"center", padding:"2px"}}><img src={Dropdown} style={{marginRight:"10px"}}/>Display <img src={Downarror} style={{marginLeft:"10px"}}/></div>
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    padding:"5px",
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius:'5%',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                    zIndex: 1,
                    width: '200px'
                }}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px"}}>
                    <label for="grouping">Grouping</label>
                    <select name="grouping" id="grouping" value={group}  onChange={onChangeGroup}>
                        <option value="priority" >Priority</option>
                        <option value="user">Users</option>
                        <option value="status">Status</option>
                    </select>
                    </div>
                    <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px"}}>
                    <label for="ordering">Ordering</label>
                    <select name="ordering" id="ordering" value={order}onChange={onChangeOrder}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                    </div>
                    </div>
                </div>
            )}
        </div>
        </nav>
    );
};
 

export default Navbar;