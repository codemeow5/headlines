import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApps,
  appsSelector,
} from "../../../store/slices/apps";
import { App } from "../App/App";
import { AppSkeleton } from "../../Skeletons";
import { Container } from "./AppList.module";
import { sourcesSelector } from "../../../store/slices/sources";

export const AppList = () => {
  const { apps, loading, hasErrors } = useSelector(appsSelector);
  const { sources, userSources } = useSelector(sourcesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApps(sources, userSources));
  }, [dispatch, sources, userSources]);

  const renderApps = () => {
    if (loading)
      return (
        <>
          <AppSkeleton />
          <AppSkeleton />
          <AppSkeleton />
          <AppSkeleton />
          <AppSkeleton />
          <AppSkeleton />
        </>
      );

    if (hasErrors) return <p>Unable to display apps.</p>;

    return (
      apps &&
      apps.map((app) => (
        <App
          key={app.id}
          title={app.name}
          url={app.url}
          imageUrl={app.imageUrl}
        />
      ))
    );
  };

  return <Container visible={!loading}>{renderApps()}</Container>;
};
