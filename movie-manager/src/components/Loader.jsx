import {Box, CircularProgress} from "@mui/material";
import React from "react";

const Loader = () => {
    return (
        <Box sx={{display:"flex", justifyContent: 'center', marginTop: 30}}>
            <CircularProgress size={60}/>
        </Box>
    );
};

export default Loader;