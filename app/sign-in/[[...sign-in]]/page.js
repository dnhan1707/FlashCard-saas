'use client'

import { Container, Typography, TextField, Button, Grid, Paper, Link } from "@mui/material";
import { useState } from "react";
import NextLink from "next/link";

export default function SignInPage() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", form);
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
                <Typography variant="h5" gutterBottom align="center">
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Don't have an account?{' '}
                    <NextLink href="/sign-up" passHref>
                        <Link underline="hover">Sign Up</Link>
                    </NextLink>
                </Typography>
            </Paper>
        </Container>
    );
}
