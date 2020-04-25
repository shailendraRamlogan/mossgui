import React, {Component} from 'react';
import './index.css';
import axios from 'axios';

import ReactTooltip from 'react-tooltip';

class Index extends Component{

submitRequest = () =>{

}
clickHandler = () =>{
  document.getElementById('test').click();
}

uploadingBaseFIle = event => {
  const fd = new FormData();
  fd.append('studentA', event.target.files[0], 'baseFiles');
  console.log("uploading file")
  axios.post('https://us-central1-mossguideployment.cloudfunctions.net/uploadFile', fd)
  .then(res => {
    console.log(res);
  });
}


uploadingSourceFile = event => {
  const fd = new FormData();
  fd.append('studentA', event.target.files[0], 'sourceFiles');
  console.log("uploading file")
  axios.post('https://us-central1-mossguideployment.cloudfunctions.net/uploadFile', fd)
  .then(res => {
    console.log(res);
  });
}
render() {
 

  return(
    <div className="App">
      <br></br>
      <form className = "inputForm">
        <div id="middle">
        <div id="firstRow">
          <p id = "userId" data-tip data-for='userId'>User ID:</p>
          <input id = "userBox"type = "text"></input>
          <ReactTooltip id='userId' className='tooltip' effect='solid' place='bottom'>
            <span>For information on how to get a user ID please click the "Get User Id" navigation button</span>
          </ReactTooltip>
          <p id = "language" data-tip data-for='language'>Language</p>
          <ReactTooltip id='language' className='tooltip' effect='solid' place='bottom'>
            <span>Please select the programming language of the files you wish to validate</span>
          </ReactTooltip>
          <select className="langDrop" name="Languages">
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="c">C</option>
            <option value="c#">C#</option>
            <option value="python">Python</option>
            <option value="visualbasic">Visual Basic</option>
            <option value="javascript">Javascript</option>
            <option value="fortran">FORTRAN</option>
            <option value="ml">ML</option>
            <option value="haskell">Haskell</option>
            <option value="lisp">Lisp</option>
            <option value="scheme">Scheme</option>
            <option value="pascal">Pascal</option>
            <option value="modula2">Modula2</option>
            <option value="ada">Ada</option>
            <option value="perl">Perl</option>
            <option value="tcl">TCL</option>
            <option value="mathlab">Mathlab</option>
            <option value="vhdl">VHDL</option>
            <option value="verilog">Verilog</option>
            <option value="spice">Spice</option>
            <option value="mips assembly">MIPS assembly</option>
            <option value="a8086 assembly">a8086 assembly</option>
            <option value="hcl2">HCL2</option>
          </select>
        </div>
        <br></br>
        <div id="secondRow">
            <p id = "validate" data-tip data-for='validate'>Validate Using The Experimental Server:</p> 
            <ReactTooltip id='validate' className='tooltip' effect='solid' place='bottom'>
            <span>Please check this box if you wish to validate your files using the Moss experimental server</span>
            </ReactTooltip>
            <input id= "validateCheck"name="Use experimental server" type="checkbox"></input>
            <p id="sameDirectory" data-tip data-for='sameDirectory'>Group Files By The Directory They Are In: </p>
            <ReactTooltip id='sameDirectory' className='tooltip' effect='solid' place='bottom'>
            <span>Please check this box if you wish to group files by the directory they exist in</span>
            </ReactTooltip>
            <input id="sameDirCheck"name="Use directory mode" type="checkbox"></input>
        </div>
        <br></br>
        <div id= "thirdRow">
          <p id="legit" data-tip data-for='legit'>Legitimacy      Threshold:</p>
          <ReactTooltip id='legit' className='tooltip' effect='solid' place='bottom'>
            <span>This number is used to specify the number of files a piece of code may occour in before it is regarded as a piece of code that must exist in all scripts being validated</span>
          </ReactTooltip> 
          <input className="legitParameter" name="Legitimacy threshold" type="number" defaultValue="10"></input>
          <p id="matches" data-tip data-for='matches'># Matching Files (def):</p> 
          <ReactTooltip id='matches' className='tooltip' effect='solid' place='bottom'>
            <span>This number is used to specify the number of matching files presented in the result</span>
          </ReactTooltip> 
          <input className="matchParameter" name="Option n" type="number" defaultValue="350"></input>
          <p id="comment" data-tip data-for='comment'>Comment String (apn):</p> 
          <ReactTooltip id='comment' className='tooltip' effect='solid' place='bottom'>
            <span>This parameter is used to specify a string to be attached to the report which will be generated</span>
          </ReactTooltip>
          <input className="commentParameter" name="Option c" type="number"></input><br></br>

        </div>
        </div>
        <br></br>
        <ul className="buttonRow">
          <li className = "buttonR">
            <input type="file" onChange={this.uploadingBaseFIle} ref={fileInput => this.fileInput = fileInput} accept=".zip"/>
            <button data-tip data-for='baseFilesTip' className="buttonElement" name="Choose base file(s)" onClick={() => this.fileInput.click()}>Choose Base File(s)</button>
            <ReactTooltip id='baseFilesTip' className='tooltip' effect='solid' place='bottom'>
              <span>Upload all base files in a zip file</span>
            </ReactTooltip>
          </li>
          <li className = "buttonR">
            <input type="file" id= "test" onChange={this.uploadingSourceFile} accept=".zip"/>
            <button data-tip data-for='sourceFilesTip' className="buttonElement" name="Choose base file(s)" onClick={this.clickHandler}>Choose Source File(s)</button>
            <ReactTooltip id='sourceFilesTip' className='tooltip' effect='solid' place='bottom'>
              <span>Upload a zip file containing folders holding the source files for each students submission</span>
            </ReactTooltip>
          </li>
          <li className = "buttonR">
            <button className="buttonElement" name="Send request" onClick={this.submitRequest} >Send Request</button>
          </li>        
        </ul>
        <br></br>

      </form>
      <br></br>
      <div className="returnBox">
          <textarea className="rerturn" type="text" name="uploadedFiles" readOnly="True" style ={{width: 1435, height: 355}}/>
      </div>
    </div>
  );


}
}

export default Index;
