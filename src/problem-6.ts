{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(oldProfile: Profile, changes: Partial<Profile>): Profile {
        const updatedProfile = { ...oldProfile, ...changes }
        return updatedProfile;
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}

