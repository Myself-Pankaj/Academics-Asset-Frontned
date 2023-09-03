import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, createQueAns } from "../../redux/actions/quraAction";
import { NEW_QUE_ANS_RESET } from "../../redux/Constants/quraConstants";
import { Button } from "@chakra-ui/react";
const AskQue = () => {
  const { loading, error, success } = useSelector((state) => state.askQuestion);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Here is your Question");
      navigate("/qora");
      dispatch({ type: NEW_QUE_ANS_RESET });
    }
  }, [dispatch, error, navigate, success]);

  const createQuestionSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("question", question);
    myForm.set("title", title);
    myForm.set("link", link);

    dispatch(createQueAns(myForm));
  };

  const titles = [
    "Python",
    "DSA",
    "ReactJs",
    "NodeJs",
    "Cyber security",
    "Database",
  ];
  return (
    <section className="askque">
      <form
        className="createProductForm"
        encType="multipart/form-data"
        onSubmit={createQuestionSubmitHandler}
      >
        <h1>Ask Your Question</h1>
        {/* <h2>{user.name}</h2> */}
        <div>
          Topic
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            {titles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div>
          Que.
          <textarea
            type="number"
            placeholder=" Ask Question"
            required
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <div>
          Links
          <input
            placeholder="If There is no Link Press Na"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          ></input>
        </div>

        <Button
          id="createQueBtn"
          type="submit"
          disabled={loading ? true : false}
          isLoading={loading ? true : false}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default AskQue;
