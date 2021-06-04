import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}))

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright � "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

type EmptyLayoutProps = {
  backgroundImage: string
  isShuffle: boolean
}

const EmptyLayout: React.FC<EmptyLayoutProps> = (props) => {
  const classes = useStyles()

  return (
    <Grid
      container
      component="main"
      direction={props.isShuffle ? "row-reverse" : "row"}
      className={classes.root}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {props.children}
        <Box top={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  )
}

export default EmptyLayout
