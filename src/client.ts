import {createClient} from "@sanity/client";

export default createClient({
  projectId: "dggw9jax", // find this at manage.sanity.io or in your sanity.json
  dataset: "developmentdataset", // this is from those question during 'sanity init'
  useCdn: true,
});