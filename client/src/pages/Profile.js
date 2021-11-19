import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../helpers/AuthContext';

export default function Profile() {
    let { id } = useParams();
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [listOfPosts, setListOfPosts] = useState([]);
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response) => {
            setUsername(response.data.username);
        })

        axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response) => {
            setListOfPosts(response.data);
        })
       
    }, []);

    return (
        <div className="profilePageContainer">
            <div className="basicInfo">
              {" "}
              <h1>  Username: {username}</h1>
              {
                authState.username === username && (
                  <button onClick={() => {
                      history.push("/changepassword")
                  }}> Change My Password</button>
                )
              }
              </div>
            <div className="listOfPosts">
            {listOfPosts.map((value, key) => {
        return (
          <div
            key={key}
            className="post"S
          >
            <div className="title"> {value.title} </div>
            <div className="body" onClick={() => {
              history.push(`/post/${value.id}`);
            }}>{value.postText}</div>
            <div className="footer">
            <div className="username">
                {value.username}
            </div>
            <div className="buttons">
                <label>{ value.Likes.length }</label>
            </div>
             
            </div>
          </div>
        );
      })}
            </div>
        </div>
    )
}
