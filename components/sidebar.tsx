import Image from "next/image"
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout"
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md"
import Link from "next/link"

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
]

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
]

const Sidebar = () => {
  return (
    <Box w='100%' h='calc(100vh - 100px)' bg='black' px='5px' color='gray'>
      <Box py='20px'>
        <Box w='120px' mb='20px' px='20px'>
          {/* <Image src='' height={60} width={120} /> */}
        </Box>
        <Box mb='20px'>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem px='20px' fontSize={"16px"} key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color='white' mr='20px' />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box mt='20px'>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem px='20px' fontSize={"16px"} key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color='white' mr='20px' />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider bg='gray.800' />
      </Box>
    </Box>
  )
}

export default Sidebar
