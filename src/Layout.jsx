
// import { Link,Outlet } from "react-router-dom";
//           < Outlet style={{justifyContent:"center",alignItems:"center"}}/>
// const Layout = () => {
//     return (
//         <>

//             <div id="sidebar">
//                 <div id="main">
//                     <div id="logo">
//                     <img src="/src/image/logo2.jpg" /></div>

//                     <ul id="content">

//                         <li><Link to="home"><a href="#"></a>Home</Link></li>
//                         <li><Link to="insert"><a href="#"></a>Insert</Link></li>
//                         <li><Link to="display"><a href="#"></a>Display</Link></li>
//                         <li><Link to="update"><a href="#"></a>Update</Link></li>
//                         <li><Link to="delete"><a href="#"></a>Delete</Link></li>
//                     </ul>

//                 </div>

//                 <div id="navbar">

//                     <div style={{display:"flex", justifyContent:"center", alignContent:"center",  paddingLeft:"700px"}}></div>

//                         <input type="text" placeholder="Search..."  style={{display:"flex", justifyContent:"center",alignItems:"center", borderRadius:"5px", height:"35px" ,width:"200px",marginTop:"2.5px"}}/>

//                 </div>
//                 <div id="maindata">
//                 < Outlet/>
//                 </div>

//             </div>

//         </>

//     )
// }
// export default Layout;



import { Link, Outlet } from "react-router-dom";
< Outlet style={{ justifyContent: "center", alignItems: "center" }} />
const Layout = () => {
    return (
        <>
            <div id="mainside">
                <div id="sidebar">
                    <div id="main">
                        <div id="logo">
                            <img src="/src/image/logo2.jpg" /></div>
                         <div id="content">
                        <ul >

                            <li><Link to="home"><a href="#"></a>Home</Link></li>
                            <li><Link to="insert"><a href="#"></a>Insert</Link></li>
                            <li><Link to="display"><a href="#"></a>Display</Link></li>
                            <li><Link to="update"><a href="#"></a>Update</Link></li>
                            <li><Link to="Search"><a href="#"></a>Search</Link></li>
                        </ul>
                         </div>
                    </div>
                </div>
                <div id="arun">
                    <div id="navbar">

                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", paddingLeft: "700px" }}></div>

                        <input type="text" placeholder="Search..." style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", height: "35px", width: "200px", marginTop: "2.5px",marginLeft:"800px" }} />

                    </div>
                    <div id="maindata">
                        < Outlet />
                    </div>
                </div>
            </div>

        </>

    )
}
export default Layout;
