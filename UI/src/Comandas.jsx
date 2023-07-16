function Comandas() {

  return(
  <section className="comandas">

  <div className="commandas-grid">
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
    <Comanda/>
  </div>
  <footer>
    <div className="actions">
      <img src="" alt="" />
      <button></button>
      <button></button>
    </div>
    <aside className="queue">
      
    </aside>
  </footer>
  </section>)
}

export default Comandas

function Comanda (){


  return(
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
    
  )
}