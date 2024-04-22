import React from 'react'
import { BsCheck2} from 'react-icons/bs';
import './services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            {/* start UI DESIGN */}
            <h3>UI design</h3>
          </div>
          <ul>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* END UI DESIGN */}
        {/* START WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            {/* start UI DESIGN */}
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}
        {/* START  */}
        <article className="service">
          <div className="service_head">
            {/* start UI DESIGN */}
            <h3>FRONTEND DEVELOPEMNT</h3>
          </div>
          <ul>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* end */}
      </div>
    </section>
  );
}

export default Services