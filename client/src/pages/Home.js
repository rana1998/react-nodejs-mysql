import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const LikeAPost = (postId) => {
    axios.post("http://localhost:3001/likes",{
      PostId: postId
    },
    {
      headers:{
        accessToken: localStorage.getItem("accessToken")
      }
    }).then((response) =>{
      alert(response.data);
    })
  }

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div
            key={key}
            className="post"
            
          >
            <div className="title"> {value.title} </div>
            <div className="body" onClick={() => {
              history.push(`/post/${value.id}`);
            }}>{value.postText}</div>
            <div className="footer">{value.username}
            <button onClick={() => {LikeAPost(value.id)}}> Like</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
