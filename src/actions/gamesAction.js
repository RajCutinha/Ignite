import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

// Action Creator

const loadGames = () => async (dispatch) => {
  // Fetch
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomeingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcomeing: upcomeingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

const fetchSearch = (gameName) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(gameName));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export { loadGames, fetchSearch };
