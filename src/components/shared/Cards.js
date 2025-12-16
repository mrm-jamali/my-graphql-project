import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Cards({ title, slug, coverPhoto, author }) {
  // console.log(props)
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1)0 4px 12px", borderRadius: 4 }}>

      {
        author &&  <CardHeader  
        avatar={
          <Avatar
            src={author.avatar.url} sx={{marginLeft:2}}/> }
            title={
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            }
          />
      }
     
      
      <CardMedia component="img" height="194"  image={coverPhoto.url} alt={slug}/>
      <CardContent>
      <Typography component="h3"  variant="h6" color="textPrimary" fontWeight={600}>{title} </Typography>
      </CardContent>
      <Divider variant="middle" sx={{margin:"10px"}} />
      <CardActions > 
<Link to={`/blogs/${slug}`}  style={{textDecoration:"none",width:"100%"}}>
 <Button variant="outlined" size="small" sx={{width:"100%",borderRadius:3}}   >مطالعه مقاله</Button>
 </Link>
        
      </CardActions>
    </Card>
  );
}

export default Cards;
