import { Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { width } from "@mui/system";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { SEND_COMMENT } from "../../graphql/mutation";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [SendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
console.log(data)
  const SendHandler = () => {
    if (name && email && text) {
      SendComment();
    } else {
      toast.warn("لطفا همه فیلدها را پر کنید",{position:"top-center"})
    }
  };
  
  if (data){
    toast.success("کامنت ارسال شد و منتظر تایید می باشد",{position:"top-center"})
  }

  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component="p"
          variant="h6 "
          fontWeight={700}
          color="primary"
        >
          ارسال کامنت
        </Typography>
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }} InputLabelProps={{ sx: { right: 0, left: "auto", transformOrigin: "top right" } }}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "100%" }}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="پیام"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "100%" }}
          multiline
          minRows={4}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        {loading ? (<Button variant="contained" disabled>در حال ارسال</Button>) :
        (<Button variant="contained" onClick={SendHandler}>  ارسال
        </Button>)}
        
        
      </Grid>
       <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
