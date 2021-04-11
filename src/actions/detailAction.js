import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

const loadDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "LOADING_DETAIL",
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};

export { loadDetails };
