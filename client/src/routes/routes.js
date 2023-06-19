import HomePage from "../pages/HomePage";
import PasswordUpdate from "../pages/PasswordUpdate";
import ProtectedPage from "../components/common/ProtectedPage";
import ProjectPage from "../pages/ProjectPage";
import QuizesPage from "../pages/QuizesPage";
import CaseStudyPage from "../pages/CaseStudyPage";
// import DashboardPage from "../pages/DashboardPage";
import DashboardMenu from "../components/common/DashboardMenu";
import DashboardPage from "../pages/DashboardPage";
export const routesGen = {
  home: "/",
  passwordUpdate: "password-update",
  dashboard: "dashboard",
  projects: "projects",
  quizes: "quizes",
  casestudies: "casestudies",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedPage>
        <DashboardPage />
      </ProtectedPage>
    ),
    state: "dashboard",
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update",
  },
  {
    path: "/projects",
    element: (
      <ProtectedPage>
        <ProjectPage />
      </ProtectedPage>
    ),
    state: "projects",
  },
  {
    path: "/quizes",
    element: (
      <ProtectedPage>
        <QuizesPage />
      </ProtectedPage>
    ),
    state: "quizes",
  },
  {
    path: "/casestudies",
    element: (
      <ProtectedPage>
        <CaseStudyPage />
      </ProtectedPage>
    ),
    state: "casestudies",
  },
];

export default routes;
