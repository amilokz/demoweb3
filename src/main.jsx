
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const images = {
  hero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90",
  wash: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85",
  workshop: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1000&q=85",
  rental: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
  suv: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
  detail: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85"
};

const services = [
  ["01","Signature Wash","Foam wash · wax · interior refresh","PKR 2,500",images.wash],
  ["02","Ceramic Detail","Paint correction · ceramic coat","PKR 12,500",images.detail],
  ["03","Workshop Care","Oil · brakes · diagnostics","From PKR 3,500",images.workshop],
  ["04","Rent-a-Car","Premium cars · daily / weekly","From PKR 8,000/day",images.rental]
];

const cars = [
  ["Executive Sedan","Toyota Camry","PKR 18,000/day",images.rental],
  ["Urban SUV","Toyota Fortuner","PKR 22,000/day",images.suv],
  ["Premium Drive","BMW 5 Series","PKR 35,000/day",images.hero]
];

function App(){
  const [modal,setModal]=useState("");
  const [menu,setMenu]=useState(false);

  return (
    <div className="app">
      <div className="grid-bg"/>
      <div className="glow red"/>
      <div className="glow purple"/>

      <nav className="nav glass">
        <a className="logo" href="#">
          <span>N</span><div><b>NITROLUX</b><small>AUTO & MOBILITY</small></div>
        </a>
        <div className={"navlinks "+(menu?"open":"")}>
          <a href="#services">Services</a>
          <a href="#workshop">Workshop</a>
          <a href="#rentals">Rent a Car</a>
          <a href="#packages">Packages</a>
        </div>
        <button className="bookTop" onClick={()=>setModal("Book a Service")}>Book Now ↗</button>
        <button className="hamb" onClick={()=>setMenu(!menu)}>☰</button>
      </nav>

      <header className="hero">
        <div className="heroText">
          <div className="eyebrow"><i/> PREMIUM AUTO CARE · RAWALPINDI / ISLAMABAD</div>
          <h1>YOUR CAR.<br/><em>OUR OBSESSION.</em></h1>
          <p>Premium car wash, detailing, workshop care and luxury rentals — designed for drivers who expect a showroom finish.</p>
          <div className="actions">
            <button className="primary" onClick={()=>setModal("Book a Service")}>Book Your Car <b>→</b></button>
            <a className="secondary" href="#rentals">Explore Rentals ↗</a>
          </div>
          <div className="stats">
            <div><b>12K+</b><span>Cars serviced</span></div>
            <div><b>4.9/5</b><span>Client rating</span></div>
            <div><b>24/7</b><span>Road support</span></div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroAura"/>
          <img className="heroImg" src={images.hero}/>
          <div className="floatCard cardOne glass"><strong>✦</strong><div><b>Premium Detail</b><small>Showroom finish</small></div></div>
          <div className="floatCard cardTwo glass"><b>4.9</b><small>Client rating</small><span>★★★★★</span></div>
          <div className="numberCard glass"><b>01</b><small>/ 04<br/>FEATURED</small></div>
        </div>
      </header>

      <div className="ticker">WASH <i>✦</i> DETAIL <i>✦</i> WORKSHOP <i>✦</i> RENT A CAR <i>✦</i> ROAD SUPPORT <i>✦</i> WASH <i>✦</i> DETAIL <i>✦</i> RENT A CAR <i>✦</i></div>

      <section id="services" className="section">
        <div className="heading">
          <div><label>01 / SERVICES</label><h2>Everything your<br/><em>drive needs.</em></h2></div>
          <p>From a quick city wash to complete mechanical care, NitroLux gives local drivers one premium destination.</p>
        </div>
        <div className="serviceGrid">
          {services.map((s,i)=>
            <article className="service glass" key={s[0]} style={{animationDelay:`${i*100}ms`}}>
              <div className="serviceImg"><img src={s[4]}/><b>{s[0]}</b></div>
              <div className="serviceBody">
                <label>{s[1]}</label><h3>{s[2]}</h3><strong>{s[3]}</strong>
                <button onClick={()=>setModal(s[1])}>Book service →</button>
              </div>
            </article>
          )}
        </div>
      </section>

      <section id="workshop" className="workshop">
        <div className="workImg"><img src={images.workshop}/><div className="scan"/></div>
        <div className="workText">
          <label>02 / WORKSHOP</label>
          <h2>Performance<br/><em>without compromise.</em></h2>
          <p>Advanced diagnostics, maintenance and specialist mechanical care in a clean professional environment.</p>
          <div className="list">
            <div><b>01</b><span>Computer Diagnostics<small>Fault scan & vehicle health report</small></span></div>
            <div><b>02</b><span>Engine & Oil Care<small>OEM-grade routine service</small></span></div>
            <div><b>03</b><span>Brake & Suspension<small>Safety-first inspection</small></span></div>
          </div>
          <button className="primary" onClick={()=>setModal("Workshop Appointment")}>Schedule Workshop →</button>
        </div>
      </section>

      <section id="rentals" className="rentals">
        <div className="heading">
          <div><label>03 / RENT-A-CAR</label><h2>Drive something<br/><em>extraordinary.</em></h2></div>
          <span className="availability">● VEHICLES AVAILABLE TODAY</span>
        </div>
        <div className="carGrid">
          {cars.map(c=>
            <article className="car glass">
              <div className="carImg"><img src={c[3]}/><span>● AVAILABLE</span></div>
              <div className="carBody"><label>{c[0]}</label><h3>{c[1]}</h3><div><b>{c[2]}</b><button onClick={()=>setModal("Reserve "+c[1])}>Reserve →</button></div></div>
            </article>
          )}
        </div>
      </section>

      <section id="packages" className="section packages">
        <div className="heading"><div><label>04 / PACKAGES</label><h2>Choose your<br/><em>level of shine.</em></h2></div></div>
        <div className="packageGrid">
          <Package title="City Clean" price="PKR 2,500" text="Foam wash · vacuum · tyre shine · dashboard detail" onClick={()=>setModal("City Clean")}/>
          <Package featured title="Black Label" price="PKR 7,500" text="Deep wash · interior detail · wax · engine bay · tyre treatment" onClick={()=>setModal("Black Label")}/>
          <Package title="Ceramic Pro" price="PKR 25,000" text="Paint correction · ceramic coating · glass coat · full detail" onClick={()=>setModal("Ceramic Pro")}/>
        </div>
      </section>

      <section className="quote">
        <label>TRUSTED BY LOCAL DRIVERS</label>
        <h3>“The showroom finish without the showroom attitude.”</h3>
        <span>— Local client review · Islamabad</span>
      </section>

      <section className="cta glass">
        <div><label>05 / READY WHEN YOU ARE</label><h2>Make your next drive<br/><em>feel different.</em></h2></div>
        <button className="primary" onClick={()=>setModal("Book a Service")}>Book Now ↗</button>
      </section>

      <footer>
        <a className="logo"><span>N</span><div><b>NITROLUX</b><small>AUTO & MOBILITY</small></div></a>
        <p>Car Wash · Workshop · Rent-a-Car</p>
        <small>© 2026 NitroLux · Local Business Demo</small>
      </footer>

      {modal && <div className="modalBg" onClick={()=>setModal("")}>
        <div className="modal glass" onClick={e=>e.stopPropagation()}>
          <button className="close" onClick={()=>setModal("")}>×</button>
          <label>NITROLUX BOOKING</label><h2>{modal}</h2>
          <input placeholder="Your name"/>
          <input placeholder="Phone number"/>
          <select><option>Select date</option><option>Today</option><option>Tomorrow</option><option>This week</option></select>
          <button className="primary full" onClick={()=>setModal("")}>Confirm Request →</button>
          <small>Demo form — connect this to WhatsApp, PHP/MySQL, Firebase or your preferred backend.</small>
        </div>
      </div>}
    </div>
  );
}

function Package({title,price,text,featured,onClick}){
  return <article className={"package glass "+(featured?"featured":"")}>
    {featured && <b className="popular">MOST BOOKED</b>}
    <label>{featured?"PREMIUM":"ESSENTIAL"}</label>
    <h3>{title}</h3><strong>{price}</strong><p>{text}</p>
    <button onClick={onClick}>Choose package →</button>
  </article>
}

createRoot(document.getElementById("root")).render(<App/>);
