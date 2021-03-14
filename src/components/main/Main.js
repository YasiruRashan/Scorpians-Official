import "./Main.css";
import hello from "../../assets/hello.svg"
import Chart from "../charts/Chart";



const Main =() => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt ="hello"/>
                    <div className="main__greeting">
                        <h1>Hello !!!</h1>
                        <p>Welcome to your admin Dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className ="card">
                        <i className ="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className ="card_inner">
                            <p className="text-primary-p">Card One</p>
                            <span className="font-bold text-title">Value</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calender fa-2x text-red"></i>
                        <div className ="card_inner">
                            <p className="text-primary-p">Card Two</p>
                            <span className="font-bold text-title">Value</span>
                        </div>
                    </div>
   
                    <div className="card">
                        <i className="fa fa-calender fa-2x text-yellow"></i>
                        <div className ="card_inner">
                            <p className="text-primary-p">Card Three</p>
                            <span className="font-bold text-title">Value</span>
                        </div>    
                    </div>

                    <div className="card">
                        <i className="fa fa-calender fa-2x text-yellow"></i>
                        <div className ="card_inner">
                            <p className="text-primary-p">Card Four</p>
                            <span className="font-bold text-title">Value</span>
                        </div>    
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily analysis</h1>
                                Saman Fresh Vegetables, Badulla
                            </div>
                            <i className ="fa fa-usd"></i>
                        </div>
                        <Chart />    
                    </div>

                    <div className ="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Sales Report</h1>
                                <p>Saman Fresh Vegetables, Badulla</p>
                            </div>
                            
                        </div> 

                        <div className="charts__right__cards">
                            <div className="card1">
                              <h1>Income</h1>
                              <p>$ 75000</p>
                              </div>

                              <div className="card2">
                              <h1>Sales</h1>
                              <p>150</p>
                              </div>

                              <div className="card3">
                              <h1>Customers</h1>
                              <p> 50</p>
                              </div>

                              <div className="card4">
                              <h1>Orders</h1>
                              <p>100</p>
                              </div>         

                        </div>
                    </div>

                </div>

            </div>
        </main>
    )

}

export default Main;