import Image from "next/image";
import getStripe from '@/utils/get_stripe'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Grid, Card, CardContent, CardActions, Link } from "@mui/material";
import NextLink from "next/link";

import Head from "next/head";

export default function Home() {
  // Define subscription plans
  const plans = [
    { name: 'Basic Plan', price: '$9.99/month', features: ['Feature 1', 'Feature 2'] },
    { name: 'Standard Plan', price: '$19.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Premium Plan', price: '$29.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] }
  ];

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flash Cards</title>
        <meta name="description" content="Create Flash Cards from your text" />
      </Head>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Flash Cards Saas</Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom align="center">Choose Your Plan</Typography>
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.name}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">{plan.name}</Typography>
                  <Typography variant="h6" color="text.secondary">{plan.price}</Typography>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Select Plan</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
