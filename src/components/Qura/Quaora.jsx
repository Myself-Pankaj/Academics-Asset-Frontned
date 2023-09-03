// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, getQueAns } from "../../redux/actions/quraAction";
// import QueAnsCard from "./QueAnsCard";
// import AddIcon from "@mui/icons-material/Add";
// import { Link } from "react-router-dom";

// const titles = [
//   "python",
//   "DSA",
//   "Presonal",
// ];

// const Quaora = () => {
//   const dispatch = useDispatch();

//   const [filteredQues, setFilteredQues] = useState(null);
//   const [selectedTitle, setSelectedTitle] = useState(null);

//   const { error, ques } = useSelector((state) => state.queAns);

//   const handleFilter = (title) => {
//     setSelectedTitle(title);
//     setFilteredQues(ques.filter((que) => que.title === title));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getQueAns());
//   }, [dispatch, error]);

//   return (
//     // <div className="notes">
//     //   <Link to="/askQuestion" className="askCard">
//     //     <AddIcon />
//     //     Ask Question
//     //   </Link>
//     //   {/* <h1>Topic</h1>
//     //   <ul className="categoryBox">
//     //     {topics.map((topic) => (
//     //       <li key={topic} onClick={() => setTopic(topic)}>
//     //         {topic}
//     //       </li>
//     //     ))}
//     //   </ul> */}
//     //   {ques && ques.map((que) => <QueAnsCard key={que._id} que={que} />)}
//     // </div>
//     <div className="notes">
//     <Link to="/askQuestion" className="askCard">
//       <AddIcon />
//       Ask Question
//     </Link>
//     <div className="categoryBox">
//       <h1>Topics</h1>
//       {selectedTitle && (
//         <button onClick={() => handleFilter(null)}>Show all questions</button>
//       )}
//       {titles.map((title) => (
//         <button
//           key={title}
//           onClick={() => handleFilter(title)}
//           className={selectedTitle === title ? "active" : ""}
//         >
//           {title}
//         </button>
//       ))}
//     </div>
//     {filteredQues
//       ? filteredQues.map((que) => <QueAnsCard key={que._id} que={que} />)
//       : ques && ques.map((que) => <QueAnsCard key={que._id} que={que} />)}
//   </div>
//   );
// };

// export default Quaora;

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getQueAns } from "../../redux/actions/quraAction";
import QueAnsCard from "./QueAnsCard";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const titles = [
  "Python",
  "DSA",
  "ReactJs",
  "NodeJs",
  "Cyber security",
  "Database",
];

const Quaora = () => {
  const dispatch = useDispatch();

  const [selectedTitle, setSelectedTitle] = useState(null);

  const { error, ques } = useSelector((state) => state.queAns);

  const filteredQues = selectedTitle
    ? ques.filter(
        (que) => que.title.toLowerCase() === selectedTitle.toLowerCase()
      )
    : ques;

  const handleFilter = (title) => {
    setSelectedTitle(title);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getQueAns());
  }, [dispatch, error]);

  return (
    <div className="notes">
      <Link to="/askQuestion" className="askCard">
        <AddIcon />
        Ask Question
      </Link>
      <div className="categoryBox">
        {selectedTitle && (
          <Button
            color="white"
            backgroundColor="black"
            margin="0.5rem"
            onClick={() => handleFilter(null)}
          >
            Show all questions
          </Button>
        )}

        {titles.map((title) => (
          <Button
            margin="0.5rem"
            color="white"
            backgroundColor="black"
            key={title}
            onClick={() => handleFilter(title)}
            className={selectedTitle === title ? "active" : ""}
          >
            {title}
          </Button>
        ))}
      </div>
      {filteredQues.map((que) => (
        <QueAnsCard key={que._id} que={que} />
      ))}
    </div>
  );
};

export default Quaora;
