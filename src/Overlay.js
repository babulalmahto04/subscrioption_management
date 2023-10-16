import "./Pops.css"

const Overlay = ({setIsPopsupVisible})=>{
    console.log("=== render");
    return <div onClick={()=> setIsPopsupVisible(false)} className="main_pop">

    </div>
}
export default Overlay; 