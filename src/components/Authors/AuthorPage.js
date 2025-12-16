import { useQuery } from "@apollo/client/react";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Avatar, Container, Typography } from "@mui/material";
import Cards from "../shared/Cards";
import sanitizeHtml from "sanitize-html";
import Loader from "../shared/Loader";
// import { flex } from "@mui/system";
// import { column } from "stylis";

function AuthorPage() {
  const { slug } = useParams();
  console.log(slug);
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  console.log("data:", data);
  if (loading) return <Loader/>;
  if (error) return <p>Error: {error.message}</p>;

  const { author } = data;

  return (
    <Container maxWidth="lg">
      <Grid mt={10}>
        <Grid
          item
          container
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h6" mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h6" mt={2} color="text.secondary">
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
            
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>مقالات {author.name}</Typography>
          <Grid container spacing={2} mt={5} >
            {author.post.map((p) =>(
              <Grid item key={p.id} xs={12} sm={6} md={4}>
                <Cards
                  title={p.title}
                  slug={p.slug}
                  coverPhoto={p.coverPhoto}
                />
              </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
