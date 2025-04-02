import { BooleanField, Datagrid, List, TextField } from "react-admin"

const UserList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="username" />
            </Datagrid>
        </List>
    )
}

export default UserList;