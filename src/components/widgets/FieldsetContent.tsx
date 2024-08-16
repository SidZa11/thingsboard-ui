import FieldsetLayout from "../Layouts/FieldsetLayout"



export const Fieldset_kW52860 = () => {
    return (
    <FieldsetLayout
                        fieldsetStyle={{
                            border : "2px solid #003F6B",
                            borderRadius : "5px",
                            fontFamily : "inter",
                            paddingBottom : "5px",
                            display : "flex",
                            justifyContent : "space-around",
                            marginTop : "-2px"
                        }}
                        legendStyle={{
                            fontWeight : 600,
                            fontSize : "16px",
                            color : "#004F86",
                            marginLeft : "10px",
                            padding : "7px",
                            paddingBottom : 0,
                        }}
                        legendContent={'52860 kW'}
                        labels = {[<label key="label1" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "column", padding : "0px 10px 0 5px", borderRight : "1px solid #B6B6B6"}}>
                            <span>CUF: AC/DC</span><span>16.5%/13.7%</span>
                        </label>,
                        <label key="label2" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "column", padding : "0px 10px 0 15px", borderRight : "1px solid #B6B6B6"}}>
                            <span>Inverters Online</span><span>14/14</span>
                        </label>,
                        <label key="label3" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "column", padding : "0px 10px 0 15px", borderRight : "1px solid #B6B6B6"}}>
                            <span>Module Temp</span><span>0.00 &#x2103;</span>
                        </label>,
                        <label key="label4" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "column", padding : "0px 10px 0 15px", borderRight : "1px solid #B6B6B6"}}>
                            <span>GHI/POA</span><div>616.38/623.78 : W/m<sup>2</sup></div>
                        </label>,
                        <label key="label5" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "column", padding : "0px 10px 0 15px", borderRight : "1px solid #B6B6B6"}}>
                            <span>Tilt Irradiation/Day</span><div>4.26 kWh/m<sup>2</sup></div>
                        </label>,
                        <label key="label6" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "column", padding : "0px 10px 0 15px"}}>
                            <span>PR: Actual/Estimated</span><span>72.3%/73.6%</span>
                        </label>]}
    />
    );
};

export const Fieldset_Mode = () => {
    return (
    <FieldsetLayout
                                fieldsetStyle={{
                                    border : "2px solid #A3A3A3",
                                    borderRadius : "5px",
                                    fontFamily : "inter",
                                    padding : "9px 0px",
                                    display : "flex",
                                    flexDirection : "column",
                                    justifyContent : "space-around"
                                }}
                                legendStyle={{
                                    fontWeight : 500,
                                    fontSize : "12px",
                                    color : "#4A4A4A",
                                    marginLeft : "10px",
                                    padding : "7px",
                                    paddingBottom : 0,
                                }}
                                legendContent='MODE'
                                labels = {[
                                    <label key="label1" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "row", padding : "0px 5px 0 5px"}}>
                                        <div style={{display : "flex", margin: "0 20px 10px 0", alignItems: "center"}}>
                                            <div style={{width:"14px", height:"14px", background: "#D9D9D9", borderRadius: "50%", marginRight : "2px"}}></div>FR
                                        </div>
                                        <div style={{display : "flex", margin: "0 0px 10px 0", alignItems: "center"}}>
                                            <div style={{width:"14px", height:"14px", background: "#7EC800", borderRadius: "50%", marginRight : "2px"}}></div>FR
                                        </div>
                                    </label>,
                                    <label key="label2" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 550, color : "#4A4A4A", display : "flex", flexDirection : "row", padding : "0px 5px 0 5px"}}>
                                        <div style={{display : "flex", margin: "0 10px 0 0", alignItems: "center"}}>
                                            <div style={{width:"14px", height:"14px", background: "#D9D9D9", borderRadius: "50%", marginRight : "2px"}}></div>EXT
                                        </div>
                                        <div style={{display : "flex", margin: "0 0px 0 0", alignItems: "center"}}>
                                            <div style={{width:"14px", height:"14px", background: "#D9D9D9", borderRadius: "50%", marginRight : "2px"}}></div>EXT
                                        </div>
                                    </label>
                                ]}
    />
    );
};

export const Fieldset_Power = () => {
    return (
    <FieldsetLayout
                                fieldsetStyle={{
                                    border : "2px solid #A3A3A3",
                                    borderRadius : "5px",
                                    fontFamily : "inter",
                                    padding : "9px 5px",
                                    display : "flex",
                                    flexDirection : "column",
                                    justfyContent : "space-around"
                                }}
                                legendStyle={{
                                    fontWeight : 500,
                                    fontSize : "12px",
                                    color : "#4A4A4A",
                                    marginLeft : "10px",
                                    padding : "7px",
                                    paddingBottom : 0,
                                }}
                                legendContent='POWER'
                                labels = {[
                                    <label key="label1" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 600, color : "#4A4A4A", padding : "5px 15px 0 5px"}}>
                                        P-230.3 kW
                                    </label>,
                                    <label key="label2" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 600, color : "#4A4A4A", padding : "5px 15px 0 5px"}}>
                                        F-49.97 Hz
                                    </label>            
                                ]}
    />
    );
};

export const Fieldset_State = () => {
    return (
    <FieldsetLayout
                                fieldsetStyle={{
                                    border : "2px solid #A3A3A3",
                                    borderRadius : "5px",
                                    fontFamily : "inter",
                                    padding : "9px 5px",
                                    display : "flex",
                                    flexDirection : "column",
                                    justfyContent : "space-around"
                                }}
                                legendStyle={{
                                    fontWeight : 500,
                                    fontSize : "12px",
                                    color : "#4A4A4A",
                                    marginLeft : "10px",
                                    padding : "7px",
                                    paddingBottom : 0,
                                }}
                                legendContent='STATE'
                                labels = {[
                                    <label key="label1" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 600, color : "#4A4A4A", padding : "5px 0px 0 5px"}}>
                                        P-230.3 kW
                                    </label>,
                                    <label key="label2" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 600, color : "#4A4A4A", padding : "5px 0px 0 5px"}}>
                                        F-49.97 Hz
                                    </label>            
                                ]}
        />
    );
};

export const Fieldset_Temp = () => {
    return (
    <FieldsetLayout
                                fieldsetStyle={{
                                    border : "2px solid #A3A3A3",
                                    borderRadius : "5px",
                                    fontFamily : "inter",
                                    padding : "9px 5px",
                                    display : "flex",
                                    flexDirection : "column",
                                    justfyContent : "space-around"
                                }}
                                legendStyle={{
                                    fontWeight : 500,
                                    fontSize : "12px",
                                    color : "#4A4A4A",
                                    marginLeft : "10px",
                                    padding : "7px",
                                    paddingBottom : 0,
                                }}
                                legendContent='TEMP'
                                labels = {[
                                    <label key="label1" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 500, color : "#4A4A4A", padding : "5px 5px 0 5px"}}>
                                        Max &nbsp; <b>26.00&#x2103;</b>
                                    </label>,
                                    <label key="label2" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 500, color : "#4A4A4A", padding : "5px 5px 0 5px"}}>
                                        Avg &nbsp; <b>22.5&#x2103;</b>
                                    </label>            
                                ]}
    />
    );
};

export const Fieldset_Devices = () => {
    return (
    <FieldsetLayout
                                fieldsetStyle={{
                                    border : "2px solid #A3A3A3",
                                    borderRadius : "5px",
                                    fontFamily : "inter",
                                    padding : "2px 5px",
                                    display : "flex",
                                    flexDirection : "column",
                                    justifyContent : "space-around"
                                }}
                                legendStyle={{
                                    fontWeight : 500,
                                    fontSize : "12px",
                                    color : "#4A4A4A",
                                    marginLeft : "10px",
                                    padding : "7px",
                                    paddingBottom : 0,
                                }}
                                legendContent='DEVICES'
                                labels = {[
                                    <label key="label1" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 500, color : "#4A4A4A", padding : "0px 15px 0 5px", display : "flex",}}>
                                        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", background: "#fff", padding:"0 5px 5px 5px"}}>
                                            <span>PCS</span>
                                            <div style={{borderRadius : "5px", color: "#fff"}}>
                                                <b style={{padding:"4px", background:"#ECB526", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>2</b>
                                                <b style={{padding:"4px", background:"#B3261E"}}>12</b>
                                                <b style={{padding:"4px", background:"#B0B0B0",borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>45</b>
                                            </div>
                                        </div>
                                        <div style={{display:"flex", flexDirection:"column", background: "#fff", padding:"0 5px 5px 5px"}}>
                                            <span>Controllers</span>
                                            <div style={{borderRadius : "5px", color: "#fff"}}>
                                                {/* <b style={{padding:"4px", background:"#ECB526", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>2</b> */}
                                                <b style={{padding:"4px", background:"#B3261E", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>12</b>
                                                <b style={{padding:"4px", background:"#B0B0B0",borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>45</b>
                                            </div>
                                        </div>
                                        <div style={{display:"flex", flexDirection:"column", background: "#fff", padding:"0 5px 5px 5px"}}>
                                            <span>Batteries</span>
                                            <div style={{borderRadius : "5px", color: "#fff"}}>
                                                <b style={{padding:"4px", background:"#ECB526", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>2</b>
                                                <b style={{padding:"4px", background:"#B3261E"}}>12</b>
                                                <b style={{padding:"4px", background:"#B0B0B0",borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>45</b>
                                            </div>
                                        </div>
                                        <div style={{display:"flex", flexDirection:"column", background: "#fff", padding:"0 5px 5px 5px"}}>
                                            <span>Meters</span>
                                            <div style={{borderRadius : "5px", color: "#fff"}}>
                                                {/* <b style={{padding:"4px", background:"#ECB526", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>2</b> */}
                                                <b style={{padding:"4px", background:"#B3261E", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>12</b>
                                                <b style={{padding:"4px", background:"#B0B0B0",borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>45</b>
                                            </div>
                                        </div>
                                    </label>,
                                    <label key="label2" style={{fontFamily : "inter", fontSize : "12px", fontWeight : 500, color : "#4A4A4A", padding : "0px 15px 0 5px"}}>
                                        <div style={{display:"flex",flexDirection:"row", paddingRight:"10px", alignItems:"center", alignContent:"center"}}>
                                            <div style={{display:"flex", alignItems:"center", paddingRight:"5px"}}>
                                                <div style={{width:"5px", height:"5px", borderRadius:"50%", background:"#B0B0B0", marginRight:"5px"}}></div>
                                                <div style={{color:"#4A4A4A"}}>Total</div>
                                            </div>
                                            <div style={{display:"flex", alignItems:"center", paddingRight:"5px"}}>
                                                <div style={{width:"5px", height:"5px", borderRadius:"50%", background:"#B3261E", marginRight:"5px"}}></div>
                                                <div style={{color:"#4A4A4A"}}>Not Working</div>
                                            </div>
                                            <div style={{display:"flex", alignItems:"center", paddingRight:"5px"}}>
                                                <div style={{width:"5px", height:"5px", borderRadius:"50%", background:"#ECB526", marginRight:"5px"}}></div>
                                                <div style={{color:"#4A4A4A"}}>Error</div>
                                            </div>
                                        </div>
                                    </label>            
                                ]}
    />
    );
};