import iconRestore from "../../public/images/restore.svg";
import OrderQueue from "./OrderQueue";

function FooterComanda({arrayQueue}) {



	return (
		<footer>
			<div className="actions">
				<img src={iconRestore} alt="" className="restore" />
				<button type="button" className="listo fontBig">
					Listo
				</button>
				<button type="button" className="cancelar fontBig">
					Cancelar
				</button>
			</div>
			<aside className="queue">
				<div className="carousel">
					{arrayQueue ? arrayQueue.map((e)=>{
						const arrayTable = e.ticketid.slice(" ")
						const numberTable = arrayTable[1]
						return <OrderQueue numberTable={numberTable} />
					})
					: <h3>Cargando...</h3>
					}
				</div>
			</aside>
		</footer>
	);
}

export default FooterComanda
