import React, {useState, FC} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

import {
    Box,
    Card,
    Container,
    FormControl,
    TextField,
    Typography,
    Stack,
    Button,
    FormControlLabel,
    Checkbox, InputAdornment
} from "@mui/material";
import {GlobalValues} from "../utils/variables";
import {useNavigate} from "react-router-dom";

export const defaultFormValues = {
    email: '',
    password: '',
    error: false,
    errorMessage: '',
}

// const renderTextField = ({
//                              label,
//                              input,
//                              meta: { touched, invalid, error },
//                              ...custom
//                          }) => (
//     <TextField
//         label={label}
//         placeholder={label}
//         error={touched && invalid}
//         helperText={touched && error}
//         {...input}
//         {...custom}
//     />
// )

const SignIp: FC = () => {
    const [formValues, setFormValues] = useState(defaultFormValues)
    const navigation = useNavigate()
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        navigation('Home');
    }

    return (
        <Container>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                padding: 2,
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: 2,
                }}>
                    <img src="![](../../public/logo512.png)" alt="Logo"/>
                    <Typography variant="h4">{GlobalValues.COMPANY_NAME}</Typography>

                </Box>
                <Button variant="outlined" size="large" onClick={()=>{navigation('/signup')}}>Sign up</Button>
            </Box>
            <Box sx={{
                margin: '0 auto',
                maxWidth: '360px',
                gap: 2,
            }}>
                <Typography variant="h4">Вход</Typography>
                <Stack spacing={3} mt={3}>
                    <Button variant="outlined" size="large" onClick={()=>{navigation('/signin')}}>Sign up with Google</Button>
                    <Typography mt={3} >or use your email to sign in:</Typography>
                </Stack>
                <FormControl onSubmit={handleFormSubmit} sx={{
                    width: '100%',
                    marginTop: 1
                }}>
                    <Stack spacing={1}>
                       <TextField
                            id='email-input'
                            required
                            name='email'
                            //  label='Name'
                            placeholder='Email'
                            type='email'
                            value={formValues.email}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id='password-input'
                            required
                            name='password'
                            //  label='Name'
                            placeholder='Password 8 + characters'
                            type='password'
                            value={formValues.password}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Stack spacing={2}>
                            <Typography >I forgot my password</Typography>

                            <Button  variant="contained" size="large" type="submit">
                                Войти
                            </Button>
                        </Stack>
                    </Stack>


                </FormControl>
            </Box>

        </Container>
    );
};

export default SignIp;