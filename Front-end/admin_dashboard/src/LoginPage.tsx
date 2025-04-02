import { Login, LoginForm, required, TextInput } from "react-admin";
import { CardContent } from "@mui/material";
import { FC } from "react";

const CustomLoginPage: FC = () => (
    <Login>
        <LoginForm>
            <CardContent>
                <TextInput source="email" label="Email" fullWidth validate={required()}/>
                <TextInput source="password" label="Mot de passe" type="password" fullWidth validate={required()}/>
            </CardContent>
        </LoginForm>
    </Login>
);

export default CustomLoginPage;