import { GitHubUserType } from "../../types";
import './style.css';

interface IProps {
  user: GitHubUserType
}

export function UserCard({ user } : IProps) {
  return (
    <div className="container-user">
      <div>
        <strong>Nome: </strong>
        <span>{user?.name}</span>
      </div>
      <div>
        <strong>Bio: </strong>
        <span>{user?.bio}</span>
      </div>
      <img src={user?.avatar_url} alt={user?.name ? user?.name : ""} />
    </div>
  );
}