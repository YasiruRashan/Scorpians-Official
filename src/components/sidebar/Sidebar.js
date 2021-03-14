import "./Sidebar.css";
import logo from "../../assets/logo.png";


const Sidebar = ({sidebarOpen,closeSidebar }) => {
    return(
        <div className ={sidebarOpen ? "sidebar-responsive" : ""} id ="sidebar">
            <div className ="sidebar__title">
                <div className="sidebar__img">
                    <img src ={logo} alt ="logo"/>
                    <h1>Agrox</h1>
                </div>
                <i 
                className ="fa fa-times">
                id ="sidebarIcon"
                onClick ={() => closeSidebar()}
                </i>
            </div>
            
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>Name 01</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">section ONe</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Section Two</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Section Three</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Section Four</a>
                </div>
                <h2>Name 02</h2>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Section Five</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Section Six</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calender-check-0"></i>
                    <a href="#">Calender</a>
                </div>
                <h2>Name 03</h2>
                <div className="sidebar__link">
                    <i className="fa fa-calender-check-0"></i>
                    <a href="#">Calender</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calender-check-0"></i>
                    <a href="#">Calender</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log OUt</a>
                </div>


                
            </div>
        </div>
    )
}

export default Sidebar;