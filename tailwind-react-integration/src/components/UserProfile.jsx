function UserProfile() {
    return (
        <div className="user-profile 
                bg-gray-100 mx-auto my-10 rounded-lg shadow-lg text-center 
                   
                /* --- Small Screen (sm:640px and above --- */
                max-w-xs p-4

                /* --- Medium Screen (md: 768px and above) --- */*
                md:max-w-sm md:my-20
                ">

            <img 
                src="https://via.placeholder.com/150" 
                alt="User Profile" 
                className="
                rounded-full mx-auto
                w-24 h-24
                md:w-36 md:h-36
                " 
            />
            
            <h1 className="
                font-bold text-blue-800 my-4 text-center
                text-lg
                md:text-xl
                ">
                 John Doe
                </h1> 
            
            <p className="
            text-gray-600 text-center
            text-sm
            md:text-base
            ">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;