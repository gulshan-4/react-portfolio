import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 , faCss3, faSass , faJsSquare , faReact, faNode, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

const Skills = ()=>{
    const openSkills = (e)=>{
        const skillsDiv = e.currentTarget.nextSibling;
        skillsDiv.style.transition = 'all 200ms ease-in';
        const nmOfChilds = {skillsDiv}.skillsDiv.childNodes.length;

        setTimeout(()=>{
            if(skillsDiv.style.visibility === 'visible'){
                skillsDiv.style.visibility = 'hidden'
                skillsDiv.style.height = '0'
            }
            else{
                skillsDiv.style.visibility = 'visible'
                skillsDiv.style.height = `calc(${nmOfChilds *18}px)`
            }
        } , 2)
        
    }


    return (
        <div className="skills-cont">
            <div className="skills">
                <ul className="frontend">
                    <h1 onClick={openSkills} 
                    className='hover1'
                    style={{'color': '#e9642bbd', "border": "1px solid #e9642b"}} >
                        Frontend 
                        <FontAwesomeIcon icon={faCaretDown} style={{'margin-left':'10px'}} />
                    </h1>
                    <div>
                        <li>HTML&nbsp;
                        <FontAwesomeIcon style={{'color':'#e9642b'}} icon={faHtml5} />
                        </li>
                        <li>CSS&nbsp;
                        <FontAwesomeIcon style={{'color':'#0068ba'}} icon={faCss3} /></li>
                        <li style={{'fontSize':'22px'}}>
                        <FontAwesomeIcon style={{'color':'#C66394'}} icon={faSass} /></li>
                        <li>Javascript&nbsp;
                        <FontAwesomeIcon style={{'color':'#EFD81D'}} icon={faJsSquare} /></li>
                        <li>React.js&nbsp;
                        <FontAwesomeIcon style={{'color':'#00D1F7'}} icon={faReact} /></li>
                        <li>React Native&nbsp;
                        <FontAwesomeIcon style={{'color':'#61dbfb'}} icon={faReact} /></li>
                        <li style={{display: 'flex', alignItems: 'center'}}>
                        Next.js&nbsp;
                        <img style={{width: 'auto', height: '16px', borderRadius: '50%'}} src="/nextjs.webp" alt="next.js logo" /></li>
                    </div>
                </ul>
                <ul className="backend">
                    <h1 onClick={openSkills} 
                    className='hover2'
                    style={{'color': '#76b163d7', "border": "1px solid #76b163d7"}}>
                        Backend
                        <FontAwesomeIcon icon={faCaretDown} style={{'margin-left':'10px'}} />
                    </h1>
                    <div>
                        <li>Node.js&nbsp;
                        <FontAwesomeIcon style={{'color':'#000'}} icon={faNode} /></li>
                        <li style={{'display':'flex'}}>Express&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1333.33 773.55" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z" fill-rule="nonzero"/></svg>
                        </li>
                        <li>MySQL&nbsp;
                        <FontAwesomeIcon style={{'color':'#42759C'}} icon={faDatabase} /></li>
                    </div>
                </ul>
                <ul className="tools">
                    <h1 onClick={openSkills} 
                    className='hover3'
                    style={{'color': '#000000cc', "border": "1px solid #000000cc"}}>
                        Tools
                        <FontAwesomeIcon icon={faCaretDown} style={{'margin-left':'10px'}} />
                    </h1>
                    <div>
                        <li>github&nbsp;
                        <FontAwesomeIcon style={{'color':'#1A1A22'}} icon={faGithub} /></li>
                        <li>BitBucket&nbsp;
                        <FontAwesomeIcon style={{'color':'#2684ff'}} icon={faBitbucket} /></li>
                        <li>Terminal&nbsp;
                        <FontAwesomeIcon style={{'color':'#000'}} icon={faTerminal} /></li>
                        <li style={{'display':'flex'}}>Tailwind Css&nbsp;
                        <svg id="Layer_1" data-name="Layer 1" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29"><defs></defs><title>tailwind-css</title><path style={{"fill":"#06b6d4","fill-rule":"evenodd"}} class="cls-1" d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"/></svg>
                        </li>
                        <li style={{'display':'flex'}}>VScode&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48" style={{" fill":"#000000"}}><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"></stop><stop offset=".257" stop-color="#0069b0"></stop><stop offset=".28" stop-color="#0069b0"></stop><stop offset=".424" stop-color="#0069b0"></stop><stop offset=".491" stop-color="#0072b7"></stop><stop offset=".577" stop-color="#0076bb"></stop><stop offset=".795" stop-color="#0076bb"></stop><stop offset="1" stop-color="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path></svg>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Skills;