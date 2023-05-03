import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useGetPostsQuery } from '../../api'
import Detail from '../detail/Detail';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    border: "1px solid #AAF674",
    color: theme.palette.text.secondary,
}));

const Jobs = () => {

    const [query, setQuery] = useState("");
    const { data } = useGetPostsQuery();
    const [selectedId, setSelectedId] = useState(null);

  const handleItemClick = (id) => {
    setSelectedId(id);
  }

    return (
        <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 635 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Sayt üzrə axtarış"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={0}>
                    {
                        data &&
                        data.filter((e) => e.title.toLowerCase().includes(query)).map((dt) => (
                            <Item  key={dt.id} onClick={() => handleItemClick(dt.id)}>
                                <h4 style={{ margin: "0" }}>{dt.title}</h4>
                                <span>{dt.company}</span>
                            </Item>
                        ))
                    }

                </Stack>
            </Box>
            {selectedId && <Detail jobId={selectedId} />}
        </div>
    )
}

export default Jobs