import React from "react";
import { Search } from "@material-ui/icons";
import {Badge} from "@material-ui/core"
import {ShoppingCartOutlined} from "@material-ui/icons"

function Navbar() {
  return (
    <div className="flex h-60 w-full">
      <nav className="w-full justify-between px-10 py-5 flex h-full">
        <div className="flex-1">
          <h1 className="text-2xl cursor-pointer font-bold">Dublin</h1>
        </div>

          <div className="flex-1">
            <div className="sticky top-0 py-1.2 border-gray-500 border rounded-xl">
            <div className="flex px-1.5 py-1.5 z-50 w-full items-center rounded-sm ">
              <input type="text" placeholder="Search"
               className="rounded-xl bg-transparent border border-transparent outline-none w-full"/>
             <Search className="h-4 w-4 text-gray-500 text-sm"/>
            </div>
          </div>
          </div>

        <div className="flex-1 flex justify-end gap-x-4">
           <a href="register" className="text-2sm cursor-pointer">Register</a>
           <a href="Login" className="text-2sm cursor-pointer">Login</a>
           <div className=""><Badge color="primary" badgeContent={4}><ShoppingCartOutlined/></Badge></div>
         
        </div>
       
      </nav>
    </div>
  );
}

export default Navbar;
