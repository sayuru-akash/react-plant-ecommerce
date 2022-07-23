import { Outlet } from "react-router-dom"

const AdminDashboardHome = () => {
  return (
    <>
    <Outlet/>
        <div className="row m-4">
            <p >Hello Isuru</p>
            <p>From your account dashboard you can view your recent orders, manage your admin data, 
                and edit your password and account details.</p>
        </div>
        <div className='row text-center'>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/products' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                                <i className="fa-solid fa-location-pin dashboard-icon"></i>
                            </div>
                            <span>Products</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/blogs' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-brands fa-blogger-b dashboard-icon"></i>
                            </div>
                            <span>Blogs</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/orders' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                                <i className="fa-solid fa-clipboard dashboard-icon"></i>   
                            </div>
                            <span>Orders</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/users' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i class="fa-solid fa-users dashboard-icon"></i>   
                            </div>
                            <span>Users</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/reports' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i class="fa-solid fa-chart-pie dashboard-icon"></i>   
                            </div>
                            <span>Reports</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-right-from-bracket dashboard-icon"></i>
                            </div>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
        </div>
    </>
  )
}

export default AdminDashboardHome