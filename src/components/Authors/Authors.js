import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Link } from "react-router-dom";

import { Typography, Avatar, Grid, Divider } from "@mui/material";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader/>;
  if (error) return <h2>Something went wrong</h2>;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
      direction="column"
    >
      {data.authors.map((author,index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={1} key={author.id}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 1 }} />
              <Typography
                component="p"
                variant="p"
                color="text.secondary"
                fontWeight={600}
              >
                {author.name}
              </Typography>
            </Link>
          </Grid>

          {index!==data.authors.length-1 && ( <Grid item xs={12}>
            <Divider  variant="middle" />
          </Grid>)}
         
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
