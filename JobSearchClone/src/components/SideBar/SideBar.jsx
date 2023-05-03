import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CategoryIcon from '@mui/icons-material/Category';

const SideBar = () => {
    return (
        <div >
            <img style={{ padding: "20px 20px 0px 20px" }} width="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lyFksxdZGOV79GZWXnQfMwp9vLsKmjMyHg&usqp=CAU" alt="" />
            <ul>
                <Link to="/">
                    <Button variant="contained" style={{ marginBottom: "15px", width: "180px" }} >
                        <BusinessCenterIcon style={{ marginRight: "10px" }} />
                        Elanlar
                    </Button>
                </Link>
                <Link to="/kateqoriya">
                    <Button variant="contained" style={{ width: "180px" }} >
                        <CategoryIcon style={{ marginRight: "10px" }} />
                        Kateqoriyalar
                    </Button>
                </Link>

            </ul>
        </div>
    )
}

export default SideBar