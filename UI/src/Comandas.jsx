import iconRestore from "../public/images/restore.svg";

function Comandas() {
	return (
		<section className="comandas">
			<div className="commandas-grid">
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
				<Comanda />
			</div>
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
						
						<OrderQueue/>
						<OrderQueue/>
						<OrderQueue/>
						<OrderQueue/>
						<OrderQueue/>
						<OrderQueue/>
						<OrderQueue/>
					</div>
				</aside>
			</footer>
		</section>
	);
}

export default Comandas;

function Comanda() {
	return (
		<article className="comanda">
			<header>
				<h2 className="time">00:23</h2>
				<h3 className="numberTable">1</h3>
			</header>
			<div className="detail">
				<p>X 2 Arepas</p>
				<p>X 2 Arepas</p>
				<p>X 2 Arepas</p>
			</div>
		</article>
	);
}

function OrderQueue() {
	return (
		<button type="button" className="order">
			<h2>Mesa 1</h2>
		</button>
	);
}
