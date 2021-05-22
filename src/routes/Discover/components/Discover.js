import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import {
  getAllNewRelease,
  getAllFeaturePlaylist,
  getAllCategory,
} from "reduxSlice/spootify";

const Discover = () => {
  const dispatch = useDispatch();
  const newReleases = useSelector((state) => state.spootify.newRelease);
  const playlists = useSelector((state) => state.spootify.featurePlaylist);
  const categories = useSelector((state) => state.spootify.category);

  useEffect(() => {
    dispatch(getAllNewRelease());
    dispatch(getAllFeaturePlaylist());
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
