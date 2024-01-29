import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main, {mainLoader} from './layouts/Main'
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import Error from "./pages/Error";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import { deleteBudget } from "./actions/DeleteBudget";
import {logoutAction} from './actions/logout';
import {ToastContainer} from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: mainLoader,
        errorElement: <Error />,
        children: [
            {
                index:true,
                element: <Dashboard />,
                loader: dashboardLoader,
                action: dashboardAction,
                errorElement: <Error />
            }, 
            {
              path: "budget/:id", 
              elements: <BudgetPage />,
              loader: budgetLoader,
              action: budgetAction,
              errorElement: <Error />,
              children: [
                {
                  path: "delete",
                  action: deleteBudget,
                },
              ],
            },
            {
              path: "expenses", 
              elements: <ExpensesPage />,
              loader: expensesLoader,
              action: expensesAction,
              errorElement: <Error />
            },
            {
              path: "logout",
              action: logoutAction
            } 
        ]
    }
])

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;