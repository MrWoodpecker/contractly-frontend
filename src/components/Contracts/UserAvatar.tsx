interface UserAvatarType {
    onClick: () => void;
}
const UserAvatar: React.FC<UserAvatarType> = (props) => {
    return (
        <div onClick={props.onClick} className="memberCircle" slot="end">
            CA
        </div> 
    );
};
  
  
export default UserAvatar;
  