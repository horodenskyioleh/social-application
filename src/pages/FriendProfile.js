import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/friendProfile.scss'


const FriendProfile = () => {

    const { id } = useParams();

    // Додаємо мокові дані для демонстрації
    const friendsData = [
        { id: "1", name: "Андрій", bio: "Люблю подорожі та програмування!" },
        { id: "2", name: "Ольга", bio: "Фотограф і мандрівниця." },
        { id: "3", name: "Максим", bio: "Фанат спорту та музики." }
    ];

    const friend = friendsData.find((f) => f.id === id);

    if (!friend) {
        return <h2>Користувача не знайдено</h2>;
    }


  return (
    <div className="friend-profile">
      <h2>{friend.name}</h2>
      <p>{friend.bio}</p>
    </div>

  )
}

export default FriendProfile