import { useEffect, useState } from "react";
import { select } from "underscore";


function Comanda({table , time, details,count }) {

	const[newNumber,setNewNumber] = useState()
	const[isSelect , setIsSelect] = useState(false)

	useEffect(()=>{
		table ? setNewNumber(table.split(" ")) : false
	},[])
	
	const className = isSelect ? "isSelect" : ""


	
	return (

		<article className={`comanda ${className}`}  onClick={ ()=>{
			setIsSelect(!isSelect)
		}}>
			<header>
				<h2 className="time">00:23</h2>
				<h3 className="numberTable">{newNumber ? newNumber[1]: null}</h3>
			</header>
			<div className="detail">
				<p><span>{`x${count}`}</span> {details}</p>
			</div>
		</article>
	);
}
export default Comanda