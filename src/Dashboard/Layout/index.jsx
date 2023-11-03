import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Breadcrumb, Button, Dropdown, Space } from "antd";

import "./style.scss";
const items = [
  
  {
    key: "0",
    label: (
      <Space className="flex items-center bg-green-300 text-white  gap-[2px]">
        <Link to={`/dashboard/user`}>
        <i class='bx bx-cog' ></i>{""} Sozlamalar
        
        </Link>
    
      </Space>
    ),
  },{
    key: "1",
    label: (
      <Space className="flex items-center gap-[3px]">
        <Link to={`/signin`}>
        <i className='bx bx-left-arrow-alt text-[20px] '></i>Chiqish
        </Link>
    
      </Space>
    ),
  },
 
];
const index = () => {
  return (
    <div className="ssss">
      <header className="flex items-center justify-between h-[80px] px-[50px] head text-green-400">
        <Link to='/dashboard'><a href="#"><p className="text-green-500">Ebgub</p></a></Link>
        

        <div className="flex items-center gap-5 login">
          <button className="flex items-center">
            <i className="bx bx-menu text-[30px]"></i>
          </button>
          <div className="flex items-center gap-1 user">
          <Dropdown
              className="text-[#553737] flex items-center"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="flex items-center gap-1 user">
                    <i className="bx bxs-user-circle text-[30px]"></i>
                  </div>
                  
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </header>

      <div className="down">
        <div className="sidebar">
          <ul>
            <li>
              <NavLink to="/dashboard" className="nav__link">
                <i className="bx bxs-home text-[24px] text-[#1b2336]"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/oquvchilar" className="nav__link">
                <i className="bx  bx-pencil text-[24px] text-[#1b2336]"></i>
                <p>O'quvchilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/kurslar" className="nav__link">
                <i className="bx bxs-book-alt text-[24px] text-[#1b2336]"></i>
                <p>Kurslar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/buyurtmachilar" className="nav__link">
                <i className="bx bx-user-circle text-[24px] text-[#1b2336]"></i>
                <p>Buyurtmachilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/xizmatlar" className="nav__link">
                <i className="bx bxs-briefcase text-[24px] text-[#1b2336]"></i>
                <p>Xizmatlar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <main className="">
          <div className="outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
