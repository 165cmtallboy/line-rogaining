import React from 'react';
import { Grid, Paper, TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from "@mui/material";
import example from './example.jpg';
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveIcon from '@mui/icons-material/Save';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HistoryIcon from '@mui/icons-material/History';
import human from './human.png';

export default function LocationDetail(){
    return (
    <Grid container spacing={1} p="2em">
        <Grid xs={6} item>
            <Paper elevation={3}>
                <Box p="1em">
                    <img width="100%" src={example} />
                    <Button variant="contained"> 画像を変更する</Button>
                </Box>
            </Paper>
        </Grid>
        <Grid xs={6} item>
            <Paper elevation={3}>
                <Box p="1em">
                    <h4>ロケーション編集</h4>
                    <TextField fullWidth label="場所名"  />
                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={6}>
                            <TextField fullWidth label="緯度" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="経度" />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={"flex-end"} >
                        <Button variant="contained" item startIcon={<SaveIcon />}>保存</Button>
                        <Button color='secondary' variant="contained" item startIcon={<HighlightOffIcon />}>削除</Button>
                    </Grid>
                </Box>
            </Paper>
            <Box mt="1em">
                <Paper elevation={3} mt={"1em"}>
                    <Box p="1em">
                        <h4>訪問ログ</h4>
                        <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={human} />
                            </ListItemAvatar>
                            <ListItemText primary="techang" secondary="Jan 9, 2014" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={human} />
                            </ListItemAvatar>
                            <ListItemText primary="ひろぽ" secondary="Jan 7, 2014" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={human} />
                            </ListItemAvatar>
                            <ListItemText primary="HNK" secondary="July 20, 2014" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <HistoryIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="...さらに２４けんのログがあります" secondary="ログ一覧ページはこちら" />
                        </ListItem>
                        <Divider />
                        </List>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    </Grid>)
}