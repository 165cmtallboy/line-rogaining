
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import { Button, Paper, Box, List, ListItem, ListItemAvatar, Typography, ListItemText, Divider, Avatar, IconButton, Grid } from '@mui/material';
import { Container } from '@mui/system';
export default function LicationList(){
    return (
        <Container maxWidth="md">
        <Paper elevation={3}>
            <Box p="0.2em" m="0.9em">
                <h2>ロケーション管理</h2>
                <List>
                    <ListItem 
                        alignItems="flex-start"
                        secondaryAction={<>
                            <IconButton edge="end" aria-label="comments">
                              <ExploreIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                            <SettingsIcon />
                            </IconButton>
                            </>
                          }
                    >
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="炭焼焼鳥 かつえご"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                焼き鳥屋さんです！！
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem 
                        alignItems="flex-start"
                        secondaryAction={<>
                            <IconButton edge="end" aria-label="comments">
                              <ExploreIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                            <SettingsIcon />
                            </IconButton>
                            </>
                          }
                    >
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="寿樹"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                ジュジュです！!!!
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem 
                        alignItems="flex-start"
                        secondaryAction={<>
                            <IconButton edge="end" aria-label="comments">
                              <ExploreIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                            <SettingsIcon />
                            </IconButton>
                            </>
                          }
                    >
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
                <Grid container justifyContent={"flex-end"}>
                    <Button variant="contained" startIcon={<AddCircleIcon />}>新規追加</Button>
                </Grid>
            </Box>
        </Paper>
        </Container>
    )
}