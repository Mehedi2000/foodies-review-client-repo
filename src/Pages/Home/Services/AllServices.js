import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllServices = () => {
  const services = useLoaderData();
  return (
    <div>
      <h2 className="mt-10 text-3xl font-bold text-center">
        All Services Are Here !!
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10">
        {services.map((service) => {
          return (
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
              <figure>
                <img src={service.img} className="h-52" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 100) + " . . . ."}</p>

                <div className="card-actions flex justify-between">
                  <p className="text-red-700 font-medium">
                    Price : $ {service.price}
                  </p>
                  <Link to={`/service/${service._id}`}>
                    <button className="btn btn-error">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
