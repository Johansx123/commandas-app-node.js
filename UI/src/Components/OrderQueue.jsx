function OrderQueue({numberTable}) {
	return (
		<button type="button" className="order">
			<h2>{`Mesa ${numberTable}`}</h2>
		</button>
	);
}

export default OrderQueue