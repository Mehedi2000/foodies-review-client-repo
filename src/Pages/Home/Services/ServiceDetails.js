import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { title, img, description, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-10">
      <figure>
        <img src={img} className="h-52" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="card-actions flex justify-between">
          <p className="text-red-700 font-medium">Price : $ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
