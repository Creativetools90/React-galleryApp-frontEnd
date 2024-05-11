import React from "react";
import { useState } from "react";
import { MyContext } from "../Context/MyContextProvider";
import axios from "axios";
import api from "../api";

export const Card = () => {
  //   const [imgApi, setImgApi] = useState(null);

  return (
    <>
      <div className="cardComponent">
        {api ? (
          api.map((v, i) => {
            return (
              <div className="ImageGalCard" key={i}>
                <div className="imgContainer">
                  <img src={v.img} alt="imagegallery" />
                </div>
                <div className="aboutContainer">
                  <p className="author">photo by {v.name}</p>
                  <div className="moreinfo">
                    <p className="m_p">
                      views <span>123453</span>
                    </p>
                    <p className="m_p">
                      downloads <span>1233</span>
                    </p>
                    <p className="m_p">
                      liks <span>453</span>
                    </p>
                  </div>
                  <div className="hastages">
                    <ul className="hastage_ul">
                      {v.tags.map((tag, index) => (
                        <li className="tags" key={index}>
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <p>empty image</p>
          </>
        )}
      </div>
    </>
  );
};

//   useEffect(() => {
//     const response = async () => {
//       await axios
//         .get("https://picsum.photos/v2/list")
//         .then((res) => {
//           setImgApi(res.data);
//         })
//         .catch((e) => console.log("images api not working", e));
//     };
//     response();
//   }, []);
