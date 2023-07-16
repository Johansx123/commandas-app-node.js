import { useEffect, useState } from "react";
import Comanda from "./Comanda";
import FooterComanda from "./FooterComanda";

function Comandas() {

	const [data, setData] = useState()
	const arrayComandas = data ? data.slice(0,10): false
	const arrayQueue = data? data.slice(11 , data.length + 1) : false
	useEffect(()=>{
		fetch('http://localhost:3000/api/orders')
		.then (response =>response.json())
		.then(data => setData(data))
	},[])

	return (
		<section className="comandas">
			<div className="commandas-grid">
				
				{ 
					arrayComandas? arrayComandas.map((e)=>{

						return<Comanda 
							key={e.id} 
							table={e.ticketid} 
							time={e.ordertime}
							count={e.count}
							details={e.details}
							/>
					})
					:<h1>Cargando...</h1>
				}
			</div>
			<FooterComanda arrayQueue={arrayQueue}/>
		</section>
	);
}

export default Comandas;


