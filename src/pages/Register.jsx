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

const Register = () => {
  // router
  const navigate = useNavigate();

  // state
  const [isRegister, setIsRegister] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // formik
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required('Nama tidak boleh kosong'),
      phone: yup
        .string()
        .required('Nomor telepon tidak boleh kosong'),
      address: yup
        .string()
        .required('Alamat tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .required('Password tidak boleh kosong'),
      confirmPassword: yup
        .string()
        .required('Konfirmasi password tidak boleh kosong')
        .oneOf([yup.ref('password'), null], 'Password tidak sama'),
    }),
    onSubmit: values => {
      console.log(values);
      setIsRegister(true);
      navigate('/');
    },
  });

  // useEffect
  useEffect(() => {
    if (isRegister) {
      console.log('register');
    }
  }
  , [isRegister]);

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
          minHeight: {xs: 620, md: 600},
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
          Register
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
              id="name"
              name="name"
              label="Nama"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Nomor Telepon"
              variant="outlined"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Alamat"
              variant="outlined"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
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
              type={isPasswordVisible ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? 'Hide' : 'Show'}
                  </Button>
                )
              }}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Konfirmasi Password"
              variant="outlined"
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    {isConfirmPasswordVisible ? 'Hide' : 'Show'}
                  </Button>
                )
              }}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                padding: '10px',
              }}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default Register