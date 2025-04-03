import {useRedirect, useAuthenticated } from "react-admin";
import { Card, CardContent, Typography } from "@mui/material";

const MyProfile = () => {
    useAuthenticated();
    const redirect = useRedirect();
    const user = localStorage.getItem("user");
    const userObject = JSON.parse(user as string);
    if (!user) {
        redirect("/login");
    }
    return (
        <Card >
            <CardContent>
                <Typography variant="h5">Profil</Typography>
                <Typography variant="body1"><strong>Username :</strong> {userObject.username}</Typography>
                <Typography variant="body1"><strong>Email :</strong> {userObject.email}</Typography>
                <Typography variant="body1"><strong>Birthday :</strong> {userObject.birthday}</Typography>
                <Typography variant="body1"><strong>Phone :</strong> {userObject.phone}</Typography>
                <Typography variant="body1"><strong>Country :</strong> {userObject.country}</Typography>
                <Typography variant="body1"><strong>City :</strong> {userObject.city}</Typography>
                <Typography variant="body1"><strong>Status :</strong> {userObject.status}</Typography>
            </CardContent>
        </Card>
    );
};

export default MyProfile;
