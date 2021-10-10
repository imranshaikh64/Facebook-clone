import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/sidebar.css';
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
    const [{user},dispatch] = useStateValue();
    return (
        <>
            <div className='sidebar'>
                <Sidebaroptions src="https://media-exp1.licdn.com/dms/image/C5103AQG4ueORgcXhDg/profile-displayphoto-shrink_100_100/0/1569761840069?e=1639612800&v=beta&t=fbbeZG1e2zh-nQFIkWlskOFuN8QZTVDmDDAPonOkuC4" title="Imran Shaikh" />
                <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Information Center" />
                <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends" />
                <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups" />
                <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch" />
                <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events" />
                <Sidebaroptions Icon={ExpandMoreIcon} title="See More" />
            </div>

        </>
    );
}

export default Sidebar;