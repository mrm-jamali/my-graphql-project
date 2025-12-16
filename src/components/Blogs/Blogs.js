import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import React from "react";
import Cards from "../shared/Cards";
// import { Container, Grid } from "@mui/material";
import Grid from "@mui/material/Grid";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log(data);

  if (loading) return <Loader/>;
  if (error) return <h2>somthing went wrong</h2>;

  return (
    
  
      <Grid container spacing={2}>
        {data.posts.map((post)=>(<Grid size={{ xs: 12,sm:6, md: 4 }} key={post.id}>
          <Cards {...post} />
        </Grid>))}
      
      </Grid>
   
  );
};

export default Blogs;
