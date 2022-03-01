import { AppBar } from '@mui/material';
import Notification from './../../assets/icons/notification.svg'
import Settings from './../../assets/icons/settings.svg'
import BackArrow from './../../assets/icons/left-arrow.svg'
import HomeIcon from './../../assets/icons/home.svg'

const header = () => {
  return (
    <AppBar position="static" className="page-header">
          <div className="header-left">
               <img src={BackArrow} alt="Notification" className="mr-3" />
               <img src={HomeIcon} alt="Setting"/>
          </div>
          <div className="searchform">
               <select className="form-control">
                    <option value=""> Johndoe.near </option>
               </select>
          </div>
          <div className="header-right">
               <img src={Notification} alt="Notification" className="mr-2" />
               <img src={Settings} alt="Setting"/>
          </div>
     </AppBar>
  )
}

export default header