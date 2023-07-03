import React from "react";
import "./style.css";
import {
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.FaInstagram && (
          <li>
            <a href={socialprofils.FaInstagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.FaYoutube && (
          <li>
            <a href={socialprofils.FaYoutube}>
              <FaYoutube />
            </a>
          </li>
        )}
      
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
