import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminStats } from "../../redux/actions/adminAction";
import Stack from "@mui/material/Stack";
import NotesList from "./Notes/NotesList";
import "react-tabs/style/react-tabs.css";
import mutedVideo from "../../Assets/Accedemic.mp4";
import { Player } from "video-react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CoursesList from "./Courses/CoursesList";
import HiringCarousel from "./Hiring/HiringCarousel";
import HiringList from "./Hiring/HiringList";
import QueAnsCrousel from "./QueAns/QueAnsCrousel";
import QueAnsList from "./QueAns/QueAnsList";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, usersCount, ordersCount, totalIncome } = useSelector(
    (state) => state.ADMIN
  );

  const { products } = useSelector((state) => state.products);

  const { courses } = useSelector((state) => state.courses);

  const { jobs } = useSelector((state) => state.jobs);

  const {  ques } = useSelector((state) => state.queAns);

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: ordersCount
          ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
          : [0, 0, 0],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading === false ? (
        <div>
          <Tabs defaultIndex={0}>
            <span>
              <TabList>
                <Tab>Notes</Tab>
                <Tab>Courses</Tab>
                <Tab>QandA</Tab>
                <Tab>Hiring</Tab>
              </TabList>
            </span>
            <TabPanel>
              <section className="dashboard-1">
                <main>
                  <article>
                    <Box title="Users" value={usersCount} />
                    {/* <Box title="Orders" value={ordersCount.total} /> */}
                    <Box title="Notes" value={products && products.length} />
                    <Box title="Income" value={Math.trunc(totalIncome)} />
                  </article>

                  <section>
                    <div>
                      <Link to="/admin/orders">View Orders</Link>
                      <Link to="/admin/users">View Users</Link>
                      <Link to="/admin/addnotes">Provide Notes</Link>
                    </div>

                    <aside>
                      <Doughnut data={data} />
                    </aside>
                  </section>

                  <div>
                    <Stack>
                      <NotesList />
                    </Stack>
                  </div>
                </main>
              </section>
            </TabPanel>
            <TabPanel>
              <section className="dashboard-1">
                <main>
                  <article>
                    <Box title="Users" value={usersCount} />
                    <Box title="Course" value={courses && courses.length} />
                  </article>

                  <section>
                    <div>
                      <Link to="/courses">View Courses</Link>
                      <Link to="/admin/users">View Users</Link>
                      <Link to="/addcourse">Add Course</Link>
                    </div>

                    <aside>
                      <Player playsInline autoPlay src={mutedVideo} />
                    </aside>
                  </section>

                  <div>
                    <Stack>
                      <CoursesList />
                    </Stack>
                  </div>
                </main>
              </section>
            </TabPanel>
            <TabPanel>
            <section className="dashboard-1">
                <main>
                  <article>
                    <Box title="Users" value={usersCount} />
                    <Box title="Question's" value={ques && ques.length} />
                  </article>

                  <section>
                    <div>
                      <Link to="/qora">View Que & Ans</Link>
                      <Link to="/admin/users">View Users</Link>
                      <Link to="/addcourse">Remove Answer's</Link>
                    </div>

                    <aside>
                      <QueAnsCrousel/>
                    </aside>
                  </section>

                  <div>
                    <Stack>
                      <QueAnsList />
                    </Stack>
                  </div>
                </main>
              </section>
            </TabPanel>
            <TabPanel>
              <section className="dashboard-1">
                <main>
                  <article className="article">
                    <Box title="Users" value={usersCount} />
                    {/* <Box title="Orders" value={ordersCount.total} /> */}
                    <Box title="Hiring" value={jobs && jobs.length} />
                  </article>

                  <section className="article-2">
                    <div>
                      <Link to="/hiring">View Hiring's</Link>
                      <Link to="/admin/users">View Users</Link>
                      <Link to="/hiringUpdate">Add New Job</Link>
                    </div>

                    <aside>
                      <HiringCarousel />
                    </aside>
                  </section>
                </main>
              </section>
              <Stack>
                <HiringList />
              </Stack>
            </TabPanel>
          </Tabs>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
