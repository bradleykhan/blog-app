import jsonPlaceHolder from "../api/jsonPlaceHolder";
import { memoize } from "lodash";

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceHolder.get("/posts");

        dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
};

/* This utilises lodash's memoize to cache API requests, but has a problem.
   By caching results from any unique argument we ensure we can never get
   updated information about a user from subsequent API calls. */

// export const fetchUser = id => {
//     return dispatch => {
//         _fetchUser(id, dispatch);
//     };
// };

// const _fetchUser = memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
