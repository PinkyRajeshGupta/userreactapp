import React from "react"

const UserCard=({user})=>{
    return (
        <div className="movie">
          <div>
            <p>{user.email}</p>
          </div>
          <div>
            <img
              src={
                user.avatar !== "N/A"
                  ? user.avatar
                  : "https://via.placeholder.com/400"
              }
              alt={user.last_name}
            />
          </div>
          <div>
            <span>{user.first_name}</span>
            <h1>{user.last_name}</h1>
          </div>
        </div>
    )
}


export default UserCard;