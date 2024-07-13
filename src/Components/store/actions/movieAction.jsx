import instance from "../../utils/axios";
import { loadDetails } from "../reducers/movieSlice";
export {removeDetails} from '../reducers/movieSlice'




export const details = (id) => async (dispatch,getstate)=>{
    const externalIds = (await instance.get(`/movie/${id}/external_ids`)).data;
    const details = (await instance.get(`/movie/${id}`)).data;
    const video = (await instance.get(`/movie/${id}/videos`)).data.results.find(e=>e.type === "Trailer");
    const provider = (((await instance.get(`/movie/${id}/watch/providers`)).data).results.IN);
    console.log(provider);
    let similar = ((await instance.get(`/movie/${id}/similar`)).data).results;
    similar = [...similar,...((await instance.get(`/movie/${id}/recommendations`)).data).results] ;
    const casts = (await instance.get(`/movie/${id}/credits`)).data.cast
    const movie = {externalIds, details,provider,similar,casts,video};
    dispatch(loadDetails(movie))
}