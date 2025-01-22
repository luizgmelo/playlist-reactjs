import './App.css'
import { useEffect, useState } from 'react';
import { GitHubUserType } from './types';
import { Empty } from './components/Empty';
import { UserCard } from './components/UserCard';
import { Search } from './components/Search';


function App() {
  const [user, setUser] = useState<GitHubUserType | null>(null);
  const [input, setInput] = useState("");

  async function searchUser() {
    if (!input) {
      setUser(null);
      return;
    }

    const response = await fetch(
      `https://api.github.com/users/${input}`
    );

    if (response.status > 204) {
      console.warn("Falha ao encontrar o usuário");
      setUser(null);
      return;
    }

    const data: GitHubUserType = (await response.json()) as GitHubUserType;

    setUser(data);
  }


  useEffect(() => {
    searchUser();
  }, []);

  return (    
    <div className="container">
      <Search 
        handleSearchUser={searchUser} 
        value={input} 
        handleSetValue={setInput}
      />

      {user ? <UserCard user={user} /> : <Empty /> }
    </div>
  );
}

export default App
