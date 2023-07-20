import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import "./style.css";

const drawerWidth = 240;

interface GenreProps {
  name: string;
  image: string;
}

const genrePropsList: GenreProps[] = [
  {
    name: "Action",
    image:
      "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
  },
  {
    name: "Indie",
    image:
      "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
  },
  {
    name: "Adventure",
    image:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
  },
  {
    name: "RPG",
    image:
      "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
  },
  {
    name: "Strategy",
    image:
      "https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg",
  },
  {
    name: "Shooter",
    image:
      "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
  },
  {
    name: "Casual",
    image:
      "https://media.rawg.io/media/screenshots/054/054bf49d9e736edfda5aa8e9015faf9b.jpeg",
  },
  {
    name: "Simulation",
    image:
      "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
  },
  {
    name: "Puzzle",
    image:
      "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg",
  },
  {
    name: "Arcade",
    image:
      "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg",
  },
  {
    name: "Platformer",
    image:
      "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg",
  },
  {
    name: "Massively Multiplayer",
    image:
      "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
  },
  {
    name: "Racing",
    image:
      "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
  },
  {
    name: "Sports",
    image:
      "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
  },
  {
    name: "Fighting",
    image:
      "https://media.rawg.io/media/games/416/4164ca654a339af5be8e63cc9c480c70.jpg",
  },
  {
    name: "Family",
    image:
      "https://media.rawg.io/media/games/ef9/ef96c016bdc6f6d708085536df3d07ae.jpg",
  },
  {
    name: "Board Games",
    image:
      "https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg",
  },
  {
    name: "Educational",
    image:
      "https://media.rawg.io/media/screenshots/49d/49dae660a0fc843b23d63af8ce34e33c.jpg",
  },
  {
    name: "Card",
    image:
      "https://media.rawg.io/media/games/fab/fabd57846a0d62144cdc1393a0cadc13.jpg",
  },
];

function SideBarMain() {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", backgroundColor: "#202123" }}>
          <List>
            <Typography variant="h6" noWrap component="div" color={"white"}>
              Genres
            </Typography>

            {genrePropsList.map((genre, index) => (
              <ListItem key={index} disablePadding className="button_item">
                <ListItemAvatar>
                  <Avatar alt={genre.name} src={genre.image} />
                </ListItemAvatar>

                <ListItemButton>
                  <ListItemText primary={genre.name} className="item" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default SideBarMain;
