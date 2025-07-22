import React from "react";
import { FaHeart } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { PiConfetti } from "react-icons/pi";

const letters = [
  {
    id: 1,
    title: "Open When You're Sad",
    content: (
      <>
        Hey love, I know you're feeling down. Just know that I'm here and you
        are never alone <FaHeart />
      </>
    ),
  },
  {
    id: 2,
    title: "Open When You Miss Me",
    content: (
      <>
        Missing me? Guess what - I miss you more. Here's a hug in code{" "}
        <SiHuggingface />
      </>
    ),
  },
  {
    id: 3,
    title: "Open When It's Our Anniversary",
    content: (
      <>
        Happy Anniversary, my love! I'm so lucky to have you. Let's celebrate
        love, always <PiConfetti />
      </>
    ),
  },
];

export default letters;
