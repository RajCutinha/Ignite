import { motion } from "framer-motion";
import styled from "styled-components";
import { popup } from "../animations";

import { smallImage } from "../util";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={"/game/" + id}>
        <motion.h3 layoutId={"title " + stringPathId}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          src={smallImage(image, 640)}
          alt={name}
          layoutId={"image " + stringPathId}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  overflow: hidden;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export default Game;
