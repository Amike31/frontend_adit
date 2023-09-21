import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';


import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from '@mui/material';

const Login = () => {
  // router
  const navigate = useNavigate();

  // state
  const [isLogin, setIsLogin] = useState(false);

  // formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .required('Password tidak boleh kosong'),
    }),
    onSubmit: values => {
      console.log(values);
      setIsLogin(true);
      navigate('/');
    },
  });

  // useEffect
  useEffect(() => {
    if (isLogin) {
      console.log('login');
    }
  }
  , [isLogin]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          width: {xs: '90%', md: '60%'},
          minHeight: {xs: 620, md: 500},
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          border: {xs: 0, md: '1px solid black'},
          borderRadius: '20px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginTop: '10px',
          }}
        >
          Login
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack
            direction="column"
            spacing={2.5}
            sx={{
              width: '80%',
            }}
          >
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                padding: '10px',
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default Login