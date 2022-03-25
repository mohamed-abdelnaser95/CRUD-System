import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
    const location = useLocation();
    const getAuth = JSON.parse(localStorage.getItem('auth'))

    return (
        <>
            {/*usin the <Outlet /> here mean that return here the nested route of the RequiredAuth */}
            {getAuth?.user? (<Outlet />)  :
            (alert("you are not autherized... login first"),
            (<Navigate to="/signin" state={{ from: location }} />
            ))}
        </>
    );
}; 