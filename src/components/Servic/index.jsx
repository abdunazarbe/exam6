import { useEffect, useState } from "react";
import Ellipse from "../../assets/images/Ellipse.png";
import "./style.scss";
import ServicCard from "../../components/UI/ServicCard"
import serviceApi from './../../service/services/index';

const index = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    serviceApi.getAll().then((res) => {
      setService(res.data.services);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <section id="services">
      <div className="container">
        <div className="all">
          <div className="engtepa">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <div className="tepatexts">
              <h1 className="services_title">Services</h1>
              <p className="service_title">What our student say about us</p>
            </div>
          </div>

          <div className="service_cards">
            
               {service.map((e) => {
                return <ServicCard key={e._id} state={e} />;
              })}
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
