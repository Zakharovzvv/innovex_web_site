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
    name: '',
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

const SignUp: FC = () => {
    const [formValues, setFormValues] = useState(defaultFormValues)
    const navigation = useNavigate()
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

     const handleFormSubmit = (e: React.FormEvent) => {
         e.preventDefault();
         navigation('/Home');
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
                <Button variant="outlined" size="large" onClick={()=>{navigation('/signin')}}>Sign in</Button>
            </Box>
            <Box sx={{
                margin: '0 auto',
                maxWidth: '360px',
                gap: 2,
            }}>
                <Typography variant="h2">?????????????? ??????????????</Typography>
                <form onSubmit={handleFormSubmit} >
                    <Stack spacing={1}>
                        <TextField
                            id='name-input'
                            required
                            name='name'
                            //  label='Name'
                            placeholder='Name'
                            type='text'
                            value={formValues.name}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
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
                        <Stack>
                            <FormControlLabel control={<Checkbox/>}
                                              label={`I agree to ${GlobalValues.COMPANY_NAME} Terms and Privacy Policy.`}/>
                            <FormControlLabel control={<Checkbox/>}
                                              label={`I agree to receive ${GlobalValues.COMPANY_NAME} news and updates.`}/>
                        </Stack>
                        <Button variant="contained" size="large" type="submit">
                            ????????????????????????????????????
                        </Button>
                    </Stack>
                    <Stack spacing={1} mt={3}>
                        <Typography>or sign up with:</Typography>
                        <Button variant="outlined" size="large" onClick={()=>{navigation('/signin')}}>Sign up with Google</Button>
                    </Stack>


                </form>
            </Box>

        </Container>
    );
};

export default SignUp;