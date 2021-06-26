import "./MainContent.css";
import DashBoard from "../DashBoard/DashBoard";
import SideBar from "../SideBar/SideBar";


const MainContent = (props) => {
    return(
        <div className="main-content">
            <DashBoard />
            <SideBar />
        </div>
    );
};

export default MainContent;