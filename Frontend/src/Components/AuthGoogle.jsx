import React from 'react';
import axios from 'axios';

const AuthGoogle = async () => {

const authgoogle = await axios.post('http://localhost:3001/auth/google');

}

export default AuthGoogle;