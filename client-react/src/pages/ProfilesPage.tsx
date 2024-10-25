import { Link, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 6123];

  return (
    <div className="d-grid gap-2">
      <div className="d-grid">
        {profiles.map((profile) => (
          <Link key={profile} to={`/profiles/${profile}`}>
            Profile {profile}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ProfilesPage;
