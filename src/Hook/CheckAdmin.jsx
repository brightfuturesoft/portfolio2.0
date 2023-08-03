import React from 'react';

const CheckAdmin = (user, email) => {
    const { logOut } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [isAdminLoading, setIsAdminLoading] = useState(true);

    const navigate = useNavigate();



    useEffect(() => {
        if (email) {
            fetch(`https://serversite-liart.vercel.app/user/admin/${email}`, {
                headers: {
                    auth: `bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {


                    setIsAdmin(data?.isAdmin);
                    setIsAdminLoading(false);
                });
        }
    }, [email, navigate, logOut, head]);

    return [isAdmin, isAdminLoading,];
};


export default CheckAdmin;