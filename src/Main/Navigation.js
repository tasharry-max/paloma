import {MenuItem, Menu} from "./StyledComponents"

export default function Navigation() {
    return (
        <Menu>
            <MenuItem href="#" alt="hear" class="underline">Hear</MenuItem>
            <MenuItem href="#" alt="latest">Latest</MenuItem>
            <MenuItem href="#" alt="tour">Tour</MenuItem>
            <MenuItem href="#" alt="see">See</MenuItem>
            <MenuItem href="#" alt="shop">Shop</MenuItem>
            <MenuItem href="#" alt="watch">Watch</MenuItem>
            <MenuItem href="#" alt="personal">Personal</MenuItem>
            <MenuItem href="#" alt="aid">Aid</MenuItem>
        </Menu>
    )
}