// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const PetsCollection = () => {
  const [allPetsCollection, setAllPetsCollection] = useState([]);

  useEffect(() => {
    // sanityClient.fetch()
    // sanityClient
    //   .fetch(
    //     `*[_type == "post"]{
    //     title,
    //     slug,
    //     mainImage{
    //       asset->{
    //       _id,
    //       url
    //     }
    //   }
    // }`
    //   )
    //   .then((data) => setAllPetsCollection(data))
    //   .catch(console.error);
    const query = `{
        Pet(id: 1){
            name
        }
      }`;

    fetch(
      "https://dggw9jax.api.sanity.io/v2023-08-01/graphql/developmentdataset/default",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization is optional in most cases unless you have private datasets
          // 'Authorization': 'Bearer YOUR_SANITY_TOKEN'
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPetsCollection &&
          allPetsCollection.map((pet: any, index: any) => (
            <p>I'm a pet</p>
            // <Link to={"/" + pet.slug.current} key={pet.slug.current}>
            //   <span key={index}>
            //     <img src={pet.mainImage.asset.url} alt="" />
            //     <span>
            //       <h2>{pet.title}</h2>
            //     </span>
            //   </span>
            // </Link>
          ))}
      </div>
    </div>
  );
};

export default PetsCollection;
