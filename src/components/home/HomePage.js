import { Container, Grid, Typography } from '@mui/material'

import Authors from '../Authors/Authors'
import Blogs from '../Blogs/Blogs'
// import { useQuery } from '@apollo/client/react'
// import { GET_BLOGS_INFO } from '../../graphql/queries'




function HomePage() {
// const {loading,data,error}=useQuery(GET_BLOGS_INFO);
// console.log(data)

  return (
    <Container maxWidth="lg">
       
      <Grid container spacing={4}>
       <Grid size={{ xs: 12, md: 3 }} mt={4}>
         <Typography  component="h3" variant="h5" mb={3} fontWeight={700}    >نویسنده ها</Typography>
        <Authors />
        
       </Grid>
       <Grid item size={{ xs: 12, md: 9}} mt={4}>
        <Typography component="h3" variant="h5" mb={3} fontWeight={700} >مقالات</Typography>
        <Blogs />
        
       </Grid>

      </Grid>
    </Container>
  )
}

export default HomePage
