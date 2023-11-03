import React, { useState, useEffect } from "react";
import "./style.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const index = () => {
    return <div className="user">
        <div className="main__up">
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link to="/dashboard" className="text-[#000]  ">
                                Bosh sahifa
                            </Link>
                        ),
                    },
                    {
                        title: (
                            <Link to="/dashboard/user" className="text-[#000] ">
                                Sozlamalar
                            </Link>
                        ),
                    },
                ]}
            />
        </div>

       
    </div>;
};

export default index;
