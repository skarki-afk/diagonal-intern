import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Navbar = ( ) =>{
    return(
        <div className="w-screen flex justify-between items-center p-4 px-10 fixed">
            <h3 className={`text-4xl cursor-pointer text-blue-500`}>New Corner Cafe</h3>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon className={`cursor-pointer`}/>
            </Badge>
        </div>
    )
}

export default Navbar