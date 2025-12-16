import { useQuery } from "@apollo/client/react";

import { useParams } from "react-router-dom";

import { GET_POST_INFO } from "../../graphql/queries";
import { Avatar, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from "react-router-dom";
import CommentForm from "../comment/CommentForm";
import CommentDisplay from "../comment/CommentDisplay";


function BlogPage() {
  const { slug } = useParams();
  const navigate=useNavigate()
  console.log(slug);


  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  //  const {author,content,title,coverPhoto}=data;
  //  const {post:{author,content,title,coverPhoto}}=data

  if (loading) return <Loader/>;
  if (errors) return <h2>Something went wrong</h2>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid Container>
        <Grid item xs={12} mt={6} display="flex" justifyContent="space-between">
          <Typography component="h2" variant="h4" color="primary">
     
            {data.post.title}
          </Typography>
             < ArrowBackRoundedIcon onClick={()=>navigate(-1)}/>

        </Grid>
<Grid item xs={12} mt={4} display="flex" justifyContent="center"> 
  <img src={data.post.coverPhoto.url} alt={data.post.slug} width="50%" style={{borderRadius:15}}/>
</Grid>

        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar src={data.post.author.avatar.url} sx={{width:80,height:80,marginLeft:2}} />
          <box component="div" >
              <Typography component="P" variant="h5" fontWeight={700}>
            {data.post.author.name}
          </Typography>
          <Typography  component="P" variant="P" color="text.secondary">{data.post.author.field}</Typography>
          </box>
        
        </Grid>


        <Grid item xs={12} mt={5}>
          <Typography component="h3" variant="h5" fontWeight={700} color={"primary"}>
            {data.post.title}
          </Typography>
          
          <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>
        </Grid>


        <Grid item xs={12} mt={5}>
          <CommentForm slug={slug} />

        </Grid>
        <Grid item xs={12} mt={5}>
          <CommentDisplay slug={slug} />

        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
