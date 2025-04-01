import React, { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const AccountSettingsPage = lazy(() => import('pages/AccountSettingsPage'))

export const PublicRoutes: React.FC = () => {
  const location = useLocation()
  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.home} element={<AccountSettingsPage/>}/>
      <Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null}/>
    </Routes>
  )
}