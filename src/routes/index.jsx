import { Outlet, createBrowserRouter } from "react-router-dom"
import Kandang from "../pages/KandangPage"
import Overview from "../pages/OverviewPage"
import Ternak from "../pages/TernakPage"
import LaluLintasTernak from "../pages/LaluLintasTernakPage"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div className="main">
                <div className="sides">
                    <Sidebar />
                </div>
                <div className="page">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        ),
        children: [
            { path: '/', element: <Kandang /> },
            { path: '/kandang', element: <Kandang /> },
            { path: '/overview', element: <Overview /> },
            { path: '/ternak', element: <Ternak /> },
            { path: '/laluLintasTernak', element: < LaluLintasTernak /> }
        ]
    }
])
export default router