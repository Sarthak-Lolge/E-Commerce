function Newsletter() {
  function handleSubmit(event){
    event.preventDefault();
  }
  return (
    <div>
      <div className="text-center m-5">
        <h3>Subscribe now & get 20% off</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form action={handleSubmit} className="d-flex justify-content-center mb-5">
          <input type="text"  placeholder="Enter your email" required style={{width:"50vh ",height:"40px"}}/>
          <button className="bg-dark text-light" style={{borderRadius:"none"}}>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
