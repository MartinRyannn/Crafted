import '../styles/styles.scss'; 
import back from '../images/back-obj.png'

function Container1() {
  return (
     <section className="container1">
        <img src={back} alt="error" className='backImg' />
        <div className="coverScreen">
            <div className="leftSidebar">
                <div className="logo">CraftedVision</div>
                <div className="sidebarText">
                    <div className="textSection">
                        <div className="textBox">Web Design</div>
                        <div className="textBox">Domain Hosting</div>
                        <div className="textBox">Site Management</div>
                    </div>
                    <div className="textSection">
                        <div className="textBox">Modern Designs</div>
                        <div className="textBox">Easy To Use</div>
                        <div className="textBox">Responsive</div>
                    </div>
                    <div className="textSection">
                        <div className="textBox">Budget Friendly</div>
                        <div className="textBox">Fast Service</div>
                    </div>
                    <div className="textSection">
                        <div className="textBox">Support</div>
                    </div>
                </div>

            </div>
            <div className="mainTextContainer">
                <div className="mainText"><span>C</span>rafted <span>V</span>ision</div>
                <div className="paragraph">Providing Modern, Creative, and Impactful Websites That Elevate Your Brand and Drive Success!</div>

            </div>
            <div className="topRight">
                <button className="talkBtn">Let's Talk</button>
                <button className="menuButton"></button>
            </div>
            <div className="scrollbarContainer">
                <div className="scrollBox">
                    <div className="scrollBoxBar"></div>
                    <div className="scrollDot active"></div>
                    <div className="scrollDot"></div>
                    <div className="scrollDot"></div>
                    <div className="scrollDot"></div>
                    <div className="scrollDot"></div>
                    <div className="scrollBoxBar"></div>
                </div>
            </div>
        </div>
     </section>

  );
}

export default Container1;
