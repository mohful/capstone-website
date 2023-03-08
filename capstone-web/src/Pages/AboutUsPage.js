import { Grid, Typography, Divider } from "@mui/material"

export const AboutPage = () => {

    return (
        <div>
            <Grid 
            container 
            spacing={0}
            >
                <Grid 
                item 
                container 
                justifyContent='center'
                sx={{height: '5vh', width: '100vw'}} 
                spacing={0}
                >
                    <Grid xs={4}>
                        <Typography 
                        variant="h2" 
                        component='div'
                        gutterBottom
                        >
                            Image goes here
                        </Typography>
                    </Grid>
                    <Grid xs={7}>
                        <Typography 
                            variant="h2" 
                            component='div'
                            gutterBottom
                            >
                                Description goes here
                        </Typography>
                    </Grid>
                    <Divider />
                    <Grid xs={7}>
                        {/* <Typography 
                            variant="h2" 
                            component='div'
                            gutterBottom
                            >
                                ABOUT US PAGE LETS SEE HOW FAR THIS CAN GO CJDABCDHJBVJDHSBDJ
                        </Typography> */}
                    </Grid>
                </ Grid>
            </ Grid>
        </div>

    )
    
}