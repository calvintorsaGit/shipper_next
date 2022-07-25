import {AiFillHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {SideBarContainer} from "~/component/ui/SideBar/side-bar.styled";

function SideBar() {
    return (<SideBarContainer>
        <div style={{display:'flex'}}>
            <AiFillHome/>
            <span style={{marginLeft:'20px'}}>Beranda </span>
        </div>
        <div style={{display:'flex', marginTop:'20px'}}>
            <CgProfile/>
            <span style={{marginLeft:'24px'}}>Driver Management </span>
        </div>
    </SideBarContainer>)
}

export default SideBar