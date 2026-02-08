import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/MainPage/MainPage";
import FeedbackPage from "../Pages/FeedbackPage/FeedbackPage";
import InterviewPage from "../Pages/InterviewPage/InterviewPage";
import JobDescriptionPage from "../Pages/JobDescriptionPage/JobDescriptionPage";
import PastInterviewsPage from "../Pages/PastInterviewsPage/PastInterviewsPage";
import CharactersPage from "../Pages/CharactersPage/CharactersPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "feedback", element: <FeedbackPage /> },
            { path: "jobdescription", element: <JobDescriptionPage /> },
            { path: "interview", element: <InterviewPage /> },
            { path: "pastinterviews", element: <PastInterviewsPage /> },
            { path: "characters", element: <CharactersPage /> },
        ],
    },
]);