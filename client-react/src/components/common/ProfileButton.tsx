interface ProfileButtonProps {
  children: string;
  onClick: () => void;
}

const ProfileButton = ({ children, onClick }: ProfileButtonProps) => {
  return (
    <button type="button" className="btn btn-primary btn-lg" onClick={onClick}>
      {children}
    </button>
  );
};

export default ProfileButton;
