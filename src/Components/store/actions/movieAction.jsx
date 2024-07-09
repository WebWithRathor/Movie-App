import instance from "../../utils/axios";
import { loadDetails } from "../reducers/movieSlice";




export const details = (id) => async (dispatch,getstate)=>{
    const externalIds = (await instance.get(`/movie/${id}/external_ids`)).data;
    const details = (await instance.get(`/movie/${id}`)).data;
    const provider = (await instance.get(`/movie/${id}/watch/providers`)).data;
    const similar = ((await instance.get(`/movie/${id}/similar`)).data).results;
    const movie = {externalIds, details,provider,similar};
    dispatch(loadDetails(movie))
}